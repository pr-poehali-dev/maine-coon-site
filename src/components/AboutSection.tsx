import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const characteristics = [
    { icon: "Crown", label: "Порода", value: "Мейнкун" },
    { icon: "Calendar", label: "Возраст", value: "3 года" },
    { icon: "Palette", label: "Окрас", value: "Красный мрамор" },
    { icon: "Award", label: "Титулы", value: "Чемпион породы" },
  ];

  const traits = [
    "Дружелюбный характер",
    "Высокий интеллект",
    "Игривый нрав",
    "Преданность семье",
    "Королевская осанка",
    "Мягкий голос",
  ];

  return (
    <section className="py-20 bg-darker">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Знакомьтесь: <span className="text-orange">Царь Леон</span>
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Этот великолепный мейнкун сочетает в себе королевскую красоту,
            нежный характер и невероятную харизму
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {characteristics.map((char, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange transition-colors duration-300"
                >
                  <div className="flex items-center mb-3">
                    <Icon
                      name={char.icon as any}
                      className="text-orange mr-3"
                      size={24}
                    />
                    <span className="text-gray-400 text-sm font-medium">
                      {char.label}
                    </span>
                  </div>
                  <p className="text-white font-semibold text-lg">
                    {char.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Icon name="Star" className="text-orange mr-3" size={28} />
                Особенности характера
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {traits.map((trait, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name="Check" className="text-orange mr-2" size={16} />
                    <span className="text-gray-300">{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1595433562696-d4ba0f43f88c?w=600&h=800&fit=crop"
                alt="Царь Леон"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange text-white p-4 rounded-full shadow-lg">
              <Icon name="Crown" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
