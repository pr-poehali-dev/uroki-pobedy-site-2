
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface DocumentItemProps {
  title: string;
  description: string;
}

const DocumentItem = ({ title, description }: DocumentItemProps) => {
  return (
    <Card className="border-l-4 border-l-victory-primary hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline" className="w-full border-victory-primary text-victory-primary hover:bg-victory-light">
          Изучить документ
        </Button>
      </CardContent>
    </Card>
  );
};

const DocumentsSection = () => {
  const documents = [
    {
      title: "Приказ №227 «Ни шагу назад!»",
      description: "Исторический контекст принятия приказа и его значение для хода войны"
    },
    {
      title: "Акт о безоговорочной капитуляции",
      description: "Документ, официально завершивший Вторую мировую войну в Европе"
    },
    {
      title: "План «Барбаросса»",
      description: "Анализ немецкого плана молниеносной войны против СССР и причины его провала"
    }
  ];

  return (
    <section id="documents" className="py-16 bg-[#f1f0fb]">
      <div className="container mx-auto">
        <div className="flex items-center mb-8">
          <FileText className="text-[#9b87f5] mr-3 h-8 w-8" />
          <h2 className="text-3xl font-bold text-[#1A1F2C]">Директивы и важная документация</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <DocumentItem 
              key={index}
              title={doc.title}
              description={doc.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
