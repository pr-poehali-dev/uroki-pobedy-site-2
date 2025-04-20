
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Medal, Users } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow">
      <CardContent className="pt-6">
        <div className="rounded-full bg-[#E5DEFF] p-3 w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="text-[#6E59A5]" />,
      title: "Интерактивные материалы",
      description: "Увлекательные уроки с использованием современных технологий обучения"
    },
    {
      icon: <Medal className="text-[#6E59A5]" />,
      title: "Исторические факты",
      description: "Достоверная информация о ключевых событиях и героях Великой Отечественной войны"
    },
    {
      icon: <Users className="text-[#6E59A5]" />,
      title: "Командные проекты",
      description: "Возможность участия в коллективных исследовательских работах и конкурсах"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Особенности проекта</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
