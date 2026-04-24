import { useParams, Link } from "react-router-dom";
import { projectsData } from "./Projectdata";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const ViewDetailProject = () => {
  const { slug } = useParams<{ slug: string }>();

useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth"
    });
  }, []);

const project = projectsData.find(
    (item) => item.slug === slug
  );

  

if (!project) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        Project Not Found
      </div>
    );
  }



  return (
    <section className="min-h-screen mt-10 bg-white text-gray-900 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 mb-8"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        
        <div className="bg-white border border-blue-900 rounded-xl p-4 mb-10">
          {project.images.slice(0, 2).map((img, i) => (
    <img
      key={i}
      src={img}
      alt={`${project.title} ${i}`}
      className="w-full h-full object-cover"
    />
  ))}
        </div>

        
        <h1 className="text-4xl font-black mb-4">
          {project.title}
        </h1>

      
        <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-blue-900/30 text-blue-400 border border-blue-700">
          {project.category}
        </span>

     
        <p className="text-gray-500 mb-8 max-w-3xl">
          {project.description}
        </p>

      <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 rounded-full bg-gray-50 border border-blue-800 text-blue-300 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

     <h2 className="text-2xl font-bold mb-3">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-500">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default ViewDetailProject;
