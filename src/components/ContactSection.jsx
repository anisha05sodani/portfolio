import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Github as GithubIcon,
} from "lucide-react";

import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTheme } from "../hooks/use-theme";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="bg-contact py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center sm:text-left">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6 justify-center">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base"> Email</h4>
                    <a
                      href="mailto:anishasodani05@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      anishasodani05@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base"> Phone</h4>
                    <a
                      href="tel:+919772773845"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      +91 977-277-3845
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base"> Location</h4>
                    <span className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                      Surat, Gujarat, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base text-center w-full">
                Connect With Me
              </h4>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-4 w-full">
                <a href="https://leetcode.com/anishasodaani" target="_blank" title="Leetcode">
                  <span className={theme === 'dark' ? 'text-white' : 'text-[#222]'}>
                    <SiLeetcode className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: 'currentColor' }} />
                  </span>
                </a>
                <a href="https://codeforces.com/profile/anisha123" target="_blank" title="Codeforces">
                  <span className={theme === 'dark' ? 'text-white' : 'text-[#222]'}>
                    <SiCodeforces className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: 'currentColor' }} />
                  </span>
                </a>
                <a href="https://www.codechef.com/users/anishasodani05" target="_blank" title="Codechef">
                  <span className={theme === 'dark' ? 'text-white' : 'text-[#222]'}>
                    <SiCodechef className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: 'currentColor' }} />
                  </span>
                </a>
                <a href="https://github.com/anisha05sodani" target="_blank" title="Github">
                  <span className={theme === 'dark' ? 'text-white' : 'text-[#222]'}>
                    <SiGithub className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: 'currentColor' }} />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/anishasodani05/" target="_blank" title="Linkedin">
                  <span className={theme === 'dark' ? 'text-white' : 'text-[#222]'}>
                    <SiLinkedin className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: 'currentColor' }} />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="bg-card p-6 sm:p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6"> Send a Message</h3>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary text-sm sm:text-base"
                  placeholder="Anisha Sodani..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary text-sm sm:text-base"
                  placeholder="anishasodani05@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none text-sm sm:text-base"
                  placeholder="Hello, I'd like to talk about..."
                  rows="4"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={14} className="sm:w-4 sm:h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
