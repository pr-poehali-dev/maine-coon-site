import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const contactInfo = [
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 (999) 123-45-67",
      action: "tel:+79991234567",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "leon@mainecoon.ru",
      action: "mailto:leon@mainecoon.ru",
    },
    {
      icon: "MapPin",
      label: "Местоположение",
      value: "Москва, Россия",
      action: "#",
    },
    {
      icon: "Instagram",
      label: "Instagram",
      value: "@tsar_leon_cat",
      action: "https://instagram.com/tsar_leon_cat",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-darker">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Связаться с нами
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Хотите узнать больше о Царе Леоне или задать вопросы о мейнкунах? Мы
            всегда рады общению!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.action}
              className="group bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center">
                <div className="bg-orange/10 p-3 rounded-lg mr-4 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                  <Icon
                    name={contact.icon as any}
                    className="text-orange group-hover:text-white"
                    size={24}
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">
                    {contact.label}
                  </p>
                  <p className="text-white font-semibold group-hover:text-orange transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center bg-gray-800 p-8 rounded-2xl border border-gray-700">
          <Icon name="Heart" className="text-orange mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-4">
            Царь Леон — не просто кот, это член семьи
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Мейнкуны известны своим дружелюбным характером и преданностью. Леон
            каждый день радует нас своим присутствием и королевским поведением.
          </p>
          <Button className="bg-orange hover:bg-orange-light text-white px-8 py-3 text-lg font-semibold transition-all duration-300">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Написать нам
          </Button>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            onClick={scrollToTop}
            className="border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300"
          >
            <Icon name="ArrowUp" className="mr-2" size={20} />
            Наверх
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
