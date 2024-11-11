import {FC, memo, useEffect} from 'react';
import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        if (ScrollReveal) {
          ScrollReveal().reveal('.social-link', {
            duration: 1000,
            distance: '30px',
            origin: 'bottom',
            easing: 'ease-in-out',
            interval: 200,
            reset: true,
          });
        }
      }
    })();
  }, []);

  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className="social-link -m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
          href={href}
          key={label}>
          <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
