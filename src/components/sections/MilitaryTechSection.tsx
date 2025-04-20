
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tank } from "lucide-react";

interface TechItemProps {
  title: string;
  description: string;
  image: string;
}

const TechItem = ({ title, description, image }: TechItemProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button className="w-full bg-victory-primary hover:bg-victory-secondary">Подробнее</Button>
      </CardContent>
    </Card>
  );
};

const MilitaryTechSection = () => {
  const techItems = [
    {
      title: "Легендарный Т-34",
      description: "История создания и боевого применения танка, ставшего символом Победы",
      image: "/placeholder.svg"
    },
    {
      title: "«Катюша» БМ-13",
      description: "Реактивная система залпового огня, внушавшая ужас противнику",
      image: "/placeholder.svg"
    },
    {
      title: "Штурмовик Ил-2",
      description: "«Летающий танк» — грозное оружие советских ВВС",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="military-tech" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center mb-8">
          <Tank className="text-[#9b87f5] mr-3 h-8 w-8" />
          <h2 className="text-3xl font-bold text-[#1A1F2C]">Рассказы о военной технике</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {techItems.map((item, index) => (
            <TechItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilitaryTechSection;
