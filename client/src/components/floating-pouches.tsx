import sambalPouchImage from "@assets/image_1754091708267.png";

export function FloatingPouches() {
  const pouches = [
    {
      src: sambalPouchImage,
      className: "floating-pouch absolute top-20 left-8 w-20 h-24 md:w-28 md:h-36 opacity-80",
      rotation: "rotate-12"
    },
    {
      src: sambalPouchImage,
      className: "floating-pouch absolute top-32 right-12 w-20 h-24 md:w-28 md:h-36 opacity-70",
      rotation: "-rotate-12"
    },
    {
      src: sambalPouchImage,
      className: "floating-pouch absolute bottom-32 left-16 w-20 h-24 md:w-28 md:h-36 opacity-75",
      rotation: "rotate-6"
    },
    {
      src: sambalPouchImage,
      className: "floating-pouch absolute top-1/2 left-8 w-20 h-24 md:w-28 md:h-36 opacity-60",
      rotation: "-rotate-8"
    },
    {
      src: sambalPouchImage,
      className: "floating-pouch absolute bottom-20 right-8 w-20 h-24 md:w-28 md:h-36 opacity-65",
      rotation: "rotate-[15deg]"
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {pouches.map((pouch, index) => (
        <div key={index} className={pouch.className}>
          <img 
            src={pouch.src} 
            alt="Sambal pouch" 
            className={`w-full h-full object-cover rounded-lg shadow-lg transform ${pouch.rotation}`}
          />
        </div>
      ))}
    </div>
  );
}
