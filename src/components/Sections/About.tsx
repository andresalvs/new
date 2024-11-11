import { useEffect } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const About: React.FC = () => {
  const { profileImageSrc, description, aboutItems } = aboutData;

  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        // Dynamically import ScrollReveal as default
        const ScrollReveal = (await import('scrollreveal')).default;

        if (ScrollReveal) {
          const sr = ScrollReveal();

          sr.reveal('.about-profile-image', {
            duration: 1000,
            distance: '50px',
            origin: 'left',
            easing: 'ease-in-out',
            reset: true,
          });

          sr.reveal('.about-description', {
            duration: 1000,
            distance: '30px',
            origin: 'bottom',
            easing: 'ease-in-out',
            delay: 200,
            reset: true,
          });

          sr.reveal('.about-item', {
            duration: 1000,
            distance: '30px',
            origin: 'right',
            easing: 'ease-in-out',
            interval: 100,
            reset: true,
          });
        }
      }
    })();
  }, []);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', { 'md:grid-cols-4': !!profileImageSrc })}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="about-profile-image relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', { 'md:col-span-3': !!profileImageSrc })}>
          <div className="about-description flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">About Us</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({ label, text, Icon }, idx) => (
              <li className="about-item col-span-1 flex items-start gap-x-3" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-orange-500" />}
                <span className="text-gray-200">{label}: {text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
