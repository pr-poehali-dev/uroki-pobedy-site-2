
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 bg-[#6E59A5] text-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Образовательный проект «Уроки Победы»</h2>
          <p className="text-lg mb-6">
            Инновационная программа, направленная на сохранение исторической памяти и 
            патриотическое воспитание молодежи через изучение истории Великой Отечественной войны и современных событий.
          </p>
          <Button className="bg-[#D946EF] hover:bg-[#c82edb] text-white">
            Начать обучение <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Уроки Победы" 
            className="rounded-lg shadow-lg max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
