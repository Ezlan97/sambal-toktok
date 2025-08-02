import { useLanguage } from '@/hooks/use-language';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import riceImage from "@assets/WhatsApp Image 2025-08-02 at 08.04.12_04848073_1754093073534.jpg";
import anchoviesImage from "@assets/image_1754094637876.png";
import onionsImage from "@assets/image_1754094963146.png";
import chiliesImage from "@assets/image_1754094988970.png";
import oilImage from "@assets/image_1754095002383.png";
import tamarindImage from "@assets/image_1754095014567.png";

export function ContentSections() {
  const { t } = useLanguage();

  return (
    <main className="py-20">
      <WhatIsSection />
      <IngredientsSection />
      <SpiceAndStorageSection />
      <ServingSuggestionsSection />
    </main>
  );
}

function WhatIsSection() {
  const { t } = useLanguage();
  const { elementRef: textRef, isVisible: textVisible } = useScrollReveal();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={textRef}
            className={`reveal-on-scroll ${textVisible ? 'revealed' : ''}`}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-pink mb-6">
              {t.whatIsTitle}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-brand-text mb-6">
              {t.whatIsDescription}
            </p>
          </div>
          <div 
            ref={imageRef}
            className={`reveal-on-scroll ${imageVisible ? 'revealed' : ''}`}
          >
            <img 
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Traditional Malaysian cooking" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IngredientsSection() {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();

  const ingredients = [
    {
      src: anchoviesImage,
      name: t.anchovy,
      alt: "Dried anchovies (ikan bilis)"
    },
    {
      src: onionsImage,
      name: t.onions,
      alt: "Fresh red onions"
    },
    {
      src: chiliesImage,
      name: t.chilies,
      alt: "Fresh green and red chilies"
    },
    {
      src: oilImage,
      name: t.oil,
      alt: "Cooking oil bottle"
    },
    {
      src: tamarindImage,
      name: t.tamarind,
      alt: "Tamarind pods"
    }
  ];

  return (
    <section className="py-16 px-4 bg-pink-50/30">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-12 reveal-on-scroll ${titleVisible ? 'revealed' : ''}`}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-pink mb-4">
            {t.ingredientsTitle}
          </h2>
          <p className="text-lg text-brand-text">
            {t.ingredientsDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ingredients.map((ingredient, index) => {
            const { elementRef, isVisible } = useScrollReveal();
            return (
              <div 
                key={index}
                ref={elementRef}
                className={`reveal-on-scroll gallery-item ${isVisible ? 'revealed' : ''}`}
              >
                <img 
                  src={ingredient.src} 
                  alt={ingredient.alt} 
                  className="w-full aspect-square object-cover rounded-xl shadow-md"
                />
                <p className="text-center mt-2 text-sm font-medium">{ingredient.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SpiceAndStorageSection() {
  const { t } = useLanguage();
  const { elementRef: spiceRef, isVisible: spiceVisible } = useScrollReveal();
  const { elementRef: storageRef, isVisible: storageVisible } = useScrollReveal();

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Spice Level */}
          <div 
            ref={spiceRef}
            className={`reveal-on-scroll ${spiceVisible ? 'revealed' : ''}`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
              <h3 className="font-poppins font-bold text-2xl text-brand-pink mb-4">
                {t.spiceLevelTitle}
              </h3>
              <p className="text-lg mb-6">
                {t.spiceLevelDescription}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm">{t.spiceLevel}</span>
                <div className="flex">
                  <i className="fas fa-pepper-hot text-orange-500"></i>
                  <i className="fas fa-pepper-hot text-orange-500"></i>
                  <i className="fas fa-pepper-hot text-gray-300"></i>
                  <i className="fas fa-pepper-hot text-gray-300"></i>
                  <i className="fas fa-pepper-hot text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Storage */}
          <div 
            ref={storageRef}
            className={`reveal-on-scroll ${storageVisible ? 'revealed' : ''}`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
              <h3 className="font-poppins font-bold text-2xl text-brand-pink mb-4">
                {t.storageTitle}
              </h3>
              <p className="text-lg">
                {t.storageDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServingSuggestionsSection() {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();

  const servingSuggestions = [
    {
      src: riceImage,
      name: t.withRice,
      alt: "Sambal with rice"
    },
    {
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      name: t.withBread,
      alt: "Sambal with bread"
    },
    {
      src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      name: t.withNoodles,
      alt: "Sambal with noodles"
    },
    {
      src: "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      name: t.asCondiment,
      alt: "Sambal as condiment"
    }
  ];

  return (
    <section className="py-16 px-4 bg-pink-50/30">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-12 reveal-on-scroll ${titleVisible ? 'revealed' : ''}`}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-pink mb-4">
            {t.servingTitle}
          </h2>
          <p className="text-lg text-brand-text">
            {t.servingDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {servingSuggestions.map((suggestion, index) => {
            const { elementRef, isVisible } = useScrollReveal();
            return (
              <div 
                key={index}
                ref={elementRef}
                className={`reveal-on-scroll gallery-item ${isVisible ? 'revealed' : ''}`}
              >
                <img 
                  src={suggestion.src} 
                  alt={suggestion.alt} 
                  className="w-full aspect-[4/3] object-cover rounded-xl shadow-md"
                />
                <p className="text-center mt-3 font-medium">{suggestion.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
