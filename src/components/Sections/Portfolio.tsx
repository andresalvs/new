import React, { useEffect } from 'react';
import Image from 'next/image';
import { portfolioItems, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: React.FC = React.memo(() => {
  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        if (ScrollReveal) {
          const sr = ScrollReveal();

          sr.reveal('.portfolio-heading', {
            delay: 100,
            distance: '40px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'top',
            reset: true,
          });

          sr.reveal('.portfolio-item', {
            delay: 0,
            distance: '50px',
            duration: 1200,
            easing: 'ease-in-out',
            interval: 150,
            origin: 'bottom',
            reset: true,
          });
        }
      }
    })();
  }, []);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="portfolio-heading self-center text-xl font-bold text-white">
          Check out some of our work at Retro Vibes and Instagram
        </h2>
        <div className="w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const { title, image, url } = item;
            return (
              <div className="portfolio-item pb-6" key={`${title}-${index}`}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-max overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl"
                >
                  <div className="relative w-full h-full">
                    <Image alt={title} className="w-full h-full" placeholder="blur" src={image} />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

export default Portfolio;