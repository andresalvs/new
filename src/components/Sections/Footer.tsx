import { FC, memo, useEffect } from 'react';
import { SectionId } from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => {
  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default; // Ensure default import is used

        if (ScrollReveal) {
          const sr = ScrollReveal(); // Proper instantiation

          // Reveal the back-to-top button
          sr.reveal('.back-to-top', {
            duration: 1000,
            distance: '20px',
            origin: 'top',
            easing: 'ease-in-out',
            reset: true,
            delay: 100,
          });

          // Reveal the social icons
          sr.reveal('.footer-socials', {
            duration: 1000,
            distance: '30px',
            origin: 'bottom',
            easing: 'ease-in-out',
            interval: 100,
            reset: true,
          });

          // Reveal the copyright text
          sr.reveal('.footer-copyright', {
            duration: 800,
            distance: '10px',
            origin: 'bottom',
            easing: 'ease-in-out',
            delay: 200,
            reset: true,
          });
        }
      }
    })();
  }, []);

  return (
    <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
      <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
        <a
          className="back-to-top rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
          href={`/#${SectionId.Hero}`}>
          {/* Your icon here */}
        </a>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="footer-socials flex gap-x-4 text-neutral-100">
          <Socials />
        </div>
        <div className="footer-copyright text-neutral-400">
          &copy; {currentYear} Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
});

Footer.displayName = 'Footer';
export default Footer;
