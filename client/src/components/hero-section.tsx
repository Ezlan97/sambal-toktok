import { useLanguage } from '@/hooks/use-language';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { FloatingPouches } from './floating-pouches';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function HeroSection() {
  const { t } = useLanguage();
  const { elementRef: logoRef, isVisible: logoVisible } = useScrollReveal();
  const { elementRef: sloganRef, isVisible: sloganVisible } = useScrollReveal();
  const { elementRef: buttonRef, isVisible: buttonVisible } = useScrollReveal();

  const handleOrderClick = () => {
    window.open('https://api.whatsapp.com/send?phone=60172846499&text=sambaltoktok', '_blank');
  };

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-white via-pink-50/20 to-white flex items-center justify-center overflow-hidden">
      <FloatingPouches />
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div 
          ref={logoRef}
          className={`mb-8 reveal-on-scroll ${logoVisible ? 'revealed' : ''}`}
        >
          <div className="inline-block p-8 bg-white rounded-3xl shadow-2xl">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-brand-pink-logo rounded-2xl flex items-center justify-center">
              <div className="text-white font-poppins font-bold text-center">
                <div className="text-3xl md:text-4xl">Sambal</div>
                <div className="text-4xl md:text-5xl italic">Tok.</div>
                <div className="text-4xl md:text-5xl italic">Tok</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div 
          ref={sloganRef}
          className={`mb-8 reveal-on-scroll ${sloganVisible ? 'revealed' : ''}`}
        >
          <h1 className="font-poppins font-semibold text-2xl md:text-4xl text-brand-pink mb-4">
            {t.slogan}
          </h1>
          <p className="text-lg md:text-xl font-light text-[#42444e]">
            {t.tagline}
          </p>
        </div>

        {/* WhatsApp Order Button */}
        <div 
          ref={buttonRef}
          className={`mb-12 reveal-on-scroll ${buttonVisible ? 'revealed' : ''}`}
        >
          <Button
            onClick={handleOrderClick}
            className="inline-flex items-center gap-3 bg-brand-pink hover:bg-brand-pink/90 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
            <span>{t.orderNow}</span>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce flex justify-center mt-16">
          <button 
            onClick={() => {
              const aboutSection = document.querySelector('[data-section="about"]');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex flex-col items-center text-brand-text-light hover:text-brand-pink transition-colors duration-300 cursor-pointer group"
          >
            <span className="text-sm mb-2 group-hover:scale-105 transition-transform">{t.exploreMore}</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-xl group-hover:transform group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
}

