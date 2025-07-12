import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-about py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-full flex flex-col items-center justify-center text-center">
          <User className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold">
            Anisha Sodani
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Pre-final Year B.Tech Student · CSE @ IIIT Surat
          </p>

          <div className="mt-6 space-y-6 max-w-2xl px-4">
            {/* Education */}
            <div className="flex flex-col items-center text-muted-foreground">
              <Briefcase className="h-6 w-6 text-primary mb-2" />
              <p className="text-sm sm:text-base leading-relaxed">
                Pursuing Bachelor of Technology in Computer Science and Engineering from <br />
                <strong>Indian Institute of Information Technology, Surat</strong> (2022–2026) <br />
                <span className="text-xs text-muted-foreground">Current CGPA: 7.51</span>
              </p>
            </div>

            {/* Interests & Experience */}
            <div className="flex flex-col items-center text-muted-foreground">
              <Code className="h-6 w-6 text-primary mb-2" />
              <p className="text-sm sm:text-base leading-relaxed">
              I'm a curious and driven developer with a passion for{" "}
                <strong>Problem-Solving, Data Structures, and Algorithms.</strong> I also explore<strong> AI/ML, IoT, and Full-stack web development</strong>.
                I enjoy transforming ideas into scalable solutions and thrive
                in collaborative environments.

                  — transforming ideas into scalable solutions and thriving in collaborative environments.

              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-2">
                Selected among <strong>150+ students</strong> to work on an
                industry-level project at <strong>STPI Global</strong> on
                a <em>Face Recognition-Based Attendance Automation System</em>.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center items-center">
            <a
              href="#contact"
              className="cosmic-button text-sm sm:text-base px-6 py-3 w-full sm:w-auto"
            >
              Let's Connect
            </a>
            <a
              href="mailto:anishasodani05@gmail.com"
              className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto text-center"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
