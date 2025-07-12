import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Industry Project: Face Recognition-Based Attendance Automation",
    description: `Building an IoT-enabled face recognition system with STPI Global for automated attendance tracking. Integrated image processing techniques to automate entry validation and real-time traffic monitoring. Enhanced system efficiency using Python-based AI models to analyze vehicle and pedestrian movements.`,
    tags: ["IoT", "Image Processing", "Python", "OpenCV", "Deep Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/your-github-link-if-any",
  },
  {
    id: 2,
    title: "Crop Disease Detection and Recognition Platform",
    description: `Platform that identifies crop diseases using deep learning models trained on agricultural datasets. Implemented image preprocessing techniques to improve model accuracy. Designed UI for crop image upload and real-time disease diagnosis with treatment suggestions.`,
    tags: ["Python", "OpenCV", "Flask", "React.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/your-github-link-if-any",
  },
  {
    id: 3,
    title: "VeiledU (Github)",
    description: `Created an anonymous feedback platform for 1,000+ college students with real-time updates. Ensures security and privacy via strict user verification and data encryption, resulting in a 95% user satisfaction.`,
    tags: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/your-github-link-if-any",
  },
  {
    id: 4,
    title: "On Searching 4 Teammates (Github)",
    description: `Developed a website during the Dev Heat hackathon, enabling over 500 college students to connect. Led backend development and cross-functional team of 4, implementing functionality to efficiently manage user registration, connection, and search features.`,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/your-github-link-if-any",
  },
  {
    id: 5,
    title: "Udaipur Tourism",
    description: `A visually engaging React.js project showcasing the beauty, culture, and attractions of Udaipur. Features interactive UI, image galleries, and information about top tourist spots.`,
    tags: ["React.js", "UI", "Tourism"],
    demoUrl: "#",
    githubUrl: "https://github.com/your-github-link-if-any",
  },
  {
    id: 6,
    title: "Trading Simulator",
    description: `A high-performance trade simulator that leverages real-time market data to estimate transaction costs and market impact. Designed for speed, accuracy, and realistic trading scenarios.`,
    tags: ["React.js", "Finance", "Simulation", "Real-time Data"],
    demoUrl: "#",
    githubUrl: "https://github.com/your-github-link-if-any",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-projects py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-40 sm:h-48 overflow-hidden flex items-center justify-center bg-secondary">
                <span className="text-xl sm:text-2xl font-bold text-primary">{project.title[0]}</span>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2"> {project.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 sm:space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={18} className="sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            target="_blank"
            href="https://github.com/anisha05sodani"
          >
            Check My Github <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
