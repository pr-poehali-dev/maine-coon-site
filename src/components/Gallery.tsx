import { useState } from "react";
import Icon from "@/components/ui/icon";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=400&fit=crop",
      alt: "Царь Леон в профиль",
    },
    {
      src: "https://images.unsplash.com/photo-1595433562696-d4ba0f43f88c?w=400&h=400&fit=crop",
      alt: "Портрет Царя Леона",
    },
    {
      src: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=400&fit=crop",
      alt: "Царь Леон играет",
    },
    {
      src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop",
      alt: "Царь Леон отдыхает",
    },
    {
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
      alt: "Царь Леон на природе",
    },
    {
      src: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop",
      alt: "Царь Леон крупным планом",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Галерея <span className="text-orange">Царя Леона</span>
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Коллекция лучших моментов жизни нашего великолепного мейнкуна
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Icon name="ZoomIn" className="text-white" size={32} />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Увеличенное фото"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-orange transition-colors"
              >
                <Icon name="X" size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
