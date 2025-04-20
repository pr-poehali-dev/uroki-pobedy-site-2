
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Medal2 } from "lucide-react";

interface HeroCardProps {
  name: string;
  description: string;
  image: string;
}

const HeroCard = ({ name, description, image }: HeroCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline" className="w-full">Узнать больше</Button>
      </CardContent>
    </Card>
  );
};

const HeroesSection = () => {
  const vovHeroes = [
    { 
      name: "Георгий Жуков", 
      description: "Маршал Советского Союза, четырежды Герой Советского Союза",
      image: "/placeholder.svg"
    },
    { 
      name: "Александр Матросов", 
      description: "Закрыл своим телом амбразуру вражеского дзота",
      image: "/placeholder.svg"
    },
    { 
      name: "Зоя Космодемьянская", 
      description: "Первая женщина, удостоенная звания Героя Советского Союза (посмертно)",
      image: "/placeholder.svg"
    }
  ];

  const svoHeroes = Array.from({length: 3}).map((_, i) => ({
    name: "Герой России",
    description: "Проявил мужество и героизм при выполнении боевых задач",
    image: "/placeholder.svg"
  }));

  return (
    <section id="heroes" className="py-16 bg-[#f1f0fb]">
      <div className="container mx-auto">
        <div className="flex items-center mb-8">
          <Medal2 className="text-[#9b87f5] mr-3 h-8 w-8" />
          <h2 className="text-3xl font-bold text-[#1A1F2C]">Герои ВОВ и СВО</h2>
        </div>
        
        <Tabs defaultValue="vov" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="vov">Герои ВОВ</TabsTrigger>
            <TabsTrigger value="svo">Герои СВО</TabsTrigger>
          </TabsList>
          
          <TabsContent value="vov">
            <div className="grid md:grid-cols-3 gap-6">
              {vovHeroes.map((hero, index) => (
                <HeroCard
                  key={index}
                  name={hero.name}
                  description={hero.description}
                  image={hero.image}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="svo">
            <div className="grid md:grid-cols-3 gap-6">
              {svoHeroes.map((hero, index) => (
                <HeroCard
                  key={index}
                  name={hero.name}
                  description={hero.description}
                  image={hero.image}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HeroesSection;
