import React from "react";
import { Award, Star } from "lucide-react";

const achievements = [
  
  {
    icon: "🏆",
    text: "Winner of 'Innovision' hackathon at IIIT Surat; secured internship at STPL Global."
  },
  {
    icon: "🎨",
    text: "ART Lead, Cultural Club, SARAS, IIIT Surat (2024–2025)."
  },
  {
    icon: "🎯",
    text: "Member, Ruminate E-Cell Club, IIIT Surat (2023–2024)."
  },
  {
    icon: "👟",
    text: "Girls Captain, Sports Club, IIIT Surat (2024–2025)."
  }
];

export const AchievementSection = () => {
  return (
    <section
      id="achievements"
      className="bg-achievements py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          <div className="gradient-border p-4 sm:p-6 lg:p-8 rounded-xl bg-card shadow-md transition-all hover:shadow-xl">
            <div className="px-1 sm:px-2 lg:px-3 py-1 sm:py-2 lg:py-3 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">At IIIT Surat</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                {achievements.map((item, i) => (
                  <li key={i} className="items-start gap-2 leading-tight">
                  <span className="text-xl ">{item.icon}</span>
                  <span className="">{item.text}</span>
                </li>
                
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// // 