import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
            Царь Леон
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
            Мейнкун премиум класса
          </p>
          <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Знакомьтесь с величественным представителем породы мейнкун — котом с
          королевским характером и невероятной красотой
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="bg-orange hover:bg-orange-light text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection("gallery")}
          >
            <Icon name="Camera" className="mr-2" size={20} />
            Посмотреть галерею
          </Button>
          <Button
            variant="outline"
            className="border-orange text-orange hover:bg-orange hover:text-white px-8 py-3 text-lg transition-all duration-300"
            onClick={() => scrollToSection("about")}
          >
            <Icon name="Heart" className="mr-2" size={20} />
            Узнать больше
          </Button>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <Icon name="ChevronDown" size={32} className="text-orange" />
      </div>
    </section>
  );
};

export default HeroSection;
