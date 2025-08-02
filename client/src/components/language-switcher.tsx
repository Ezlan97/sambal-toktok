import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-pink-100">
        <Button
          variant={language === 'ms' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('ms')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'ms' 
              ? 'bg-brand-pink text-white hover:bg-brand-pink/90' 
              : 'text-brand-text hover:bg-brand-pink-light'
          }`}
        >
          BM
        </Button>
        <span className="text-brand-text-light mx-1">|</span>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'en' 
              ? 'bg-brand-pink text-white hover:bg-brand-pink/90' 
              : 'text-brand-text hover:bg-brand-pink-light'
          }`}
        >
          EN
        </Button>
      </div>
    </div>
  );
}
