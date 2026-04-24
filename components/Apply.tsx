import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const MySwal = withReactContent(Swal);

const Apply: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    message: "",
    resume: null as File | null,
  });

  const [fileName, setFileName] = useState("");

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    try {
      if (!formData.resume) {
        MySwal.fire({
          icon: "warning",
          title: "Resume Required",
          text: "Please upload your resume",
        });
        return;
      }

      setIsLoading(true);

      const data = new FormData();
      data.append("name", formData.name);
      data.append("phoneNo", formData.phoneNo);
      data.append("email", formData.email);
      data.append("message", formData.message);
      data.append("resume", formData.resume);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/form/submit`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        MySwal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Application Submitted!",
          text: "We will get back to you soon.",
          showConfirmButton: false,
          timer: 3000,
        });

        setIsOpen(false);
        setFormData({
          name: "",
          phoneNo: "",
          email: "",
          message: "",
          resume: null,
        });
        setFileName("");
      }
    } catch (error: any) {
      MySwal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error.response?.data?.message ||
          "Unable to submit application",
      });
    } finally {
      setIsLoading(false);
    }
  };

  /* ================= INPUT HANDLERS ================= */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      MySwal.fire({
        icon: "error",
        title: "Invalid File Type",
        text: "Please upload a PDF, DOC, or DOCX file",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      MySwal.fire({
        icon: "error",
        title: "File Too Large",
        text: "Please upload a file smaller than 5MB",
      });
      return;
    }

    setFormData({ ...formData, resume: file });
    setFileName(file.name);
  };

  const removeFile = () => {
    setFormData({ ...formData, resume: null });
    setFileName("");
  };

  return (
    <>
      {/* Apply Now Button */}
      {/* <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-gray-900 font-semibold shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all apply-pulse"
      >
        Apply Now
      </button> */}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white bg-opacity-70 p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-gray-700 my-8">

            {/* Close Button */}
            <button
              onClick={() => !isLoading && setIsOpen(false)}
              disabled={isLoading}
              className={`absolute top-4 right-4 p-2 rounded-full transition
                ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}
              `}
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Apply Now
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill in your details to get started
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg text-gray-900"
              />

              <input
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
                placeholder="Your phone number"
                className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg text-gray-900"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg text-gray-900"
              />

              {/* Resume */}
              {!fileName ? (
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="text-gray-600"
                />
              ) : (
                <div className="flex justify-between items-center bg-white border border-gray-700 rounded-lg px-4 py-3">
                  <span className="text-gray-900 text-sm truncate">{fileName}</span>
                  <button type="button" onClick={removeFile} className="text-red-400">
                    ✕
                  </button>
                </div>
              )}

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about yourself..."
                className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg text-gray-900 resize-none"
              />

              {/* Submit Button (SAME DESIGN + LOADING) */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center gap-2
                  bg-gradient-to-r from-blue-600 to-purple-600
                  text-gray-900 font-semibold py-3 rounded-lg transition-all
                  ${
                    isLoading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:from-blue-700 hover:to-purple-700"
                  }
                `}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.25"
                      />
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Apply;
