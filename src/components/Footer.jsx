import React from "react";
import { useTheme } from "../hooks/use-theme";
import { SiLeetcode, SiCodeforces, SiCodechef, SiGithub, SiLinkedin } from "react-icons/si";

export const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="bg-card border-t py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base text-muted-foreground">
              © 2024 <span className="text-primary font-semibold">Anisha Sodani</span>. All rights reserved.
            </p>
          </div>
          <div className="flex items-center justify-center sm:justify-end flex-wrap gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-4 w-full">
            <a
              href="https://github.com/anisha05sodani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              title="GitHub"
            >
              <span className={theme === 'dark' ? 'text-white' : 'text-[#222]'}>
                <SiGithub className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: 'currentColor' }} />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/anishasodani05/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <span className={theme === 'dark' ? 'text-white' : 'text-[#222]'}>
                <SiLinkedin className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: 'currentColor' }} />
              </span>
            </a>
            <a
              href="https://leetcode.com/anishasodaani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              title="LeetCode"
            >
              <span className={theme === 'dark' ? 'text-white' : 'text-[#222]'}>
                <SiLeetcode className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: 'currentColor' }} />
              </span>
            </a>
            <a
              href="https://codeforces.com/profile/anisha123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              title="Codeforces"
            >
              <span className={theme === 'dark' ? 'text-white' : 'text-[#222]'}>
                <SiCodeforces className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: 'currentColor' }} />
              </span>
            </a>
            <a
              href="https://www.codechef.com/users/anishasodani05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              title="CodeChef"
            >
              <span className={theme === 'dark' ? 'text-white' : 'text-[#222]'}>
                <SiCodechef className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: 'currentColor' }} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
