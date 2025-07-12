import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-hero relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 px-4">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Anisha
            </span>
            <span className="text-gradient ml-1 sm:ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}Sodani
            </span>
          </h1>

          {/* 💬 Added Quote */}
          <p className="text-sm sm:text-base italic text-muted-foreground opacity-0 animate-fade-in-delay-2">
            "Curious mind. Clean code. Meaningful impact."
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed px-2">
  Computer Science & Engineering @ IIIT Surat | Enthusiast in AI, ML, and Full-Stack Development <br className="hidden sm:block" />
  Passionate about solving real-world problems through algorithms, data structures, deep learning, and scalable system design.
</p>


          <div className="pt-2 sm:pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2"> Scroll </span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};
