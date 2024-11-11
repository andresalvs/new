import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo, useEffect } from 'react';
import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const { imageSrc, name, description, actions } = heroData;

  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        if (ScrollReveal) {
          const sr = ScrollReveal();

          // Main content reveal
          sr.reveal('.hero-content', {
            duration: 1200,
            distance: '50px',
            origin: 'top',
            easing: 'ease-in-out',
            reset: true,
            delay: 200,
          });

          // Social icons reveal
          sr.reveal('.hero-socials', {
            duration: 1000,
            distance: '30px',
            origin: 'bottom',
            interval: 100,
            easing: 'ease-in-out',
            reset: true,
          });

          // Action buttons reveal
          sr.reveal('.hero-actions', {
            duration: 1000,
            distance: '40px',
            origin: 'bottom',
            easing: 'ease-in-out',
            reset: true,
            delay: 300,
          });

          // Scroll down button reveal
          sr.reveal('.scroll-down', {
            duration: 800,
            distance: '20px',
            origin: 'bottom',
            easing: 'ease-in-out',
            reset: true,
            delay: 400,
          });
        }
      }
    })();
  }, []);

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="hero-content z-10 max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{name}</h1>
            {description}
            <div className="hero-socials flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="hero-actions flex flex-wrap gap-x-4">
              {/* Render action buttons here */}
            </div>
            <div className="scroll-down">
              <ChevronDownIcon className="h-8 w-8 animate-bounce text-white" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
