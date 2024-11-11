import { useEffect } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { portfolioItems, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: React.FC = () => {
  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        // Use dynamic import to handle module default export correctly
        const ScrollReveal = (await import('scrollreveal')).default;

        if (ScrollReveal) {
          const sr = ScrollReveal();

          // Reveal for heading
          sr.reveal('.portfolio-heading', {
            duration: 1000,
            distance: '40px',
            origin: 'top',
            easing: 'ease-in-out',
            reset: true,
            delay: 100,
          });

          // Reveal for each portfolio item
          sr.reveal('.portfolio-item', {
            duration: 1200,
            distance: '50px',
            origin: 'bottom',
            interval: 150,
            easing: 'ease-in-out',
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
            const { title, image } = item;
            return (
              <div className="pb-6 portfolio-item" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  {/* Add additional item details if needed */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
