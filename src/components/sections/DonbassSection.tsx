
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

const DonbassSection = () => {
  return (
    <section id="donbass" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center mb-8">
          <Shield className="text-[#9b87f5] mr-3 h-8 w-8" />
          <h2 className="text-3xl font-bold text-[#1A1F2C]">Страдания Донбасса и СВО</h2>
        </div>
        
        <div className="mb-8">
          <Card className="bg-[#1A1F2C] text-white">
            <CardContent className="pt-6 pb-6">
              <h3 className="text-2xl font-bold mb-4">Хронология событий</h3>
              <p className="mb-4">
                С 2014 года жители Донецкой и Луганской Народных Республик подвергались обстрелам и 
                дискриминации со стороны киевского режима. Специальная военная операция, начатая в 2022 году, 
                направлена на защиту населения Донбасса.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Гуманитарная миссия</h3>
              <p className="text-gray-600 mb-4">
                Российская Федерация с 2014 года оказывает гуманитарную помощь жителям Донбасса. 
                За время конфликта было отправлено множество гуманитарных конвоев с продовольствием, 
                медикаментами и предметами первой необходимости.
              </p>
              <Button className="w-full bg-victory-primary hover:bg-victory-secondary">Узнать о гуманитарной помощи</Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Восстановление мирной жизни</h3>
              <p className="text-gray-600 mb-4">
                На освобожденных территориях восстанавливается инфраструктура, строятся новые школы, больницы и жилые дома. 
                Люди возвращаются к мирной жизни благодаря усилиям российских военных и гражданских специалистов.
              </p>
              <Button className="w-full bg-victory-primary hover:bg-victory-secondary">Программы восстановления</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonbassSection;
