import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "C", level: 85, category: "programming" },
  { name: "C++", level: 90, category: "programming" },
  { name: "Python", level: 90, category: "programming" },
  { name: "JavaScript", level: 85, category: "programming" },
  { name: "HTML/CSS", level: 90, category: "programming" },

  // Technologies
  { name: "Node.js", level: 80, category: "technology" },
  { name: "React.js", level: 85, category: "technology" },
  { name: "Tailwind CSS", level: 80, category: "technology" },
  { name: "Flask", level: 75, category: "technology" },
  { name: "OpenCV", level: 80, category: "technology" },

  // Databases
  { name: "MongoDB", level: 75, category: "database" },
  { name: "MySQL", level: 75, category: "database" },
  { name: "PostgreSQL", level: 65, category: "database" },

  // Tools/Platforms
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Google Colab", level: 80, category: "tools" },
  { name: "Visual Studio Code", level: 90, category: "tools" },
];

const categories = [
  "all",
  "programming",
  "technology",
  "database",
  "tools",
  "softskills",
  "coursework"
];

const softSkills = [
  { name: "Cross-functional Collaboration" },
  { name: "Communication" },
  { name: "Leadership" }
];

const coursework = [
  { name: "Data Structures & Algorithms" },
  { name: "Operating Systems" },
  { name: "Object Oriented Technology" },
  { name: "Computer Networks" },
  { name: "High-Performance Computing" },
  { name: "Augmented and Virtual Reality" },
  { name: "Compiler Design" },
  { name: "Machine Learning" }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  let displaySkills = [];
  if (activeCategory === "all") {
    displaySkills = [
      ...skills,
      ...softSkills,
      ...coursework,
    ];
  } else if (activeCategory === "softskills") {
    displaySkills = softSkills;
  } else if (activeCategory === "coursework") {
    displaySkills = coursework;
  } else {
    displaySkills = skills.filter(
      (skill) => skill.category === activeCategory
    );
  }

  return (
    <section id="skills" className="bg-skills py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-colors duration-300 capitalize text-xs sm:text-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category === "softskills"
                ? "Soft Skills"
                : category === "coursework"
                ? "Relevant Coursework"
                : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displaySkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 sm:p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-3 sm:mb-4">
                <h3 className="font-semibold text-base sm:text-lg"> {skill.name}</h3>
              </div>
              {skill.level !== undefined ? (
                <>
                  <div className="w-full bg-secondary/50 h-1.5 sm:h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-1.5 sm:h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                      style={{ width: skill.level + "%" }}
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
