import { useLanguage } from '@/hooks/use-language';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Button } from '@/components/ui/button';
import riceImage from "@assets/WhatsApp Image 2025-08-02 at 08.04.12_04848073_1754093073534.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function GallerySection() {
  const { t } = useLanguage();

  return (
    <>
      <GalleryDisplay />
      <CTASection />
      <Footer />
    </>
  );
}

function GalleryDisplay() {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();

  const galleryItems = [
    {
      src: riceImage,
      alt: "Sambal TokTok with rice meal",
      className: "col-span-1 md:col-span-2 lg:col-span-1 aspect-[5/6]"
    },
    {
      src: "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Traditional Asian condiments",
      className: "aspect-[4/5]"
    },
    {
      src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Food packaging lifestyle",
      className: "aspect-[4/5]"
    },
    {
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Sambal preparation",
      className: "aspect-[4/3]"
    },
    {
      src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Malaysian family cooking together",
      className: "aspect-[4/3]"
    },
    {
      src: "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Product packaging lifestyle",
      className: "aspect-[4/3]"
    }
  ];

  return (
    <section className="py-16 px-4 bg-pink-50/60">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-12 reveal-on-scroll ${titleVisible ? 'revealed' : ''}`}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-pink mb-4">
            {t.galleryTitle}
          </h2>
          <p className="text-lg text-brand-text-light">
            {t.galleryDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const { elementRef, isVisible } = useScrollReveal();
            return (
              <div 
                key={index}
                ref={elementRef}
                className={`reveal-on-scroll gallery-item ${isVisible ? 'revealed' : ''} ${item.className}`}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollReveal();

  const handleOrderClick = () => {
    window.open('https://api.whatsapp.com/send?phone=60172846499&text=sambaltoktok', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-orange-500">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div 
          ref={elementRef}
          className={`reveal-on-scroll ${isVisible ? 'revealed' : ''}`}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t.ctaDescription}
          </p>
          <Button
            onClick={handleOrderClick}
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500" />
            <span className="text-green-600">{t.orderWhatsapp}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-pink text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <p className="text-sm text-pink-100">
            {t.footerText}
          </p>
        </div>
        <div className="text-xs text-pink-200">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

