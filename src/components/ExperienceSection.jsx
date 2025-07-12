import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "STPL Global",
    role: "Project Intern",
    location: "Surat",
    period: "Feb. 2025 - June 2025",
    details: [
      "Selected among 150 students to work on an industry project focused on Face Recognition-Based Attendance Automation Systems.",
      "Developed a face recognition system to automate real-time attendance tracking using deep learning.",
      "Integrated image processing techniques to automate entry validation and real-time traffic monitoring.",
      "Enhanced system efficiency using Python-based AI models to analyze vehicle and pedestrian movements."
    ],
    tech: "IoT, Image Processing, Python, OpenCV, Deep Learning"
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-experience py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="gradient-border p-4 sm:p-6 lg:p-8 rounded-lg card-hover bg-card">
              <div className="px-1 sm:px-2 lg:px-3 py-1 sm:py-2 lg:py-3 text-left">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{exp.company}</h3>
                    <div className="text-xs sm:text-sm text-muted-foreground">{exp.role} | {exp.location} | {exp.period}</div>
                  </div>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  <b>Tech:</b> {exp.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 