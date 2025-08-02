import { LanguageSwitcher } from '@/components/language-switcher';
import { HeroSection } from '@/components/hero-section';
import { ContentSections } from '@/components/content-sections';
import { GallerySection } from '@/components/gallery-section';
import { LanguageProvider } from '@/hooks/use-language';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Add parallax effect to floating pouches
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      document.querySelectorAll('.floating-pouch').forEach((pouch, index) => {
        const speed = 0.2 + (index * 0.1);
        (pouch as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <LanguageSwitcher />
        <HeroSection />
        <ContentSections />
        <GallerySection />
      </div>
    </LanguageProvider>
  );
}
