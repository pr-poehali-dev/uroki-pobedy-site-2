
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Map } from "lucide-react";

const CrimeaSection = () => {
  return (
    <section id="crimea" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center mb-8">
          <Map className="text-[#9b87f5] mr-3 h-8 w-8" />
          <h2 className="text-3xl font-bold text-[#1A1F2C]">История Крыма и его возвращение в состав РФ</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src="/placeholder.svg" alt="Карта Крыма" className="w-full h-80 object-cover rounded-lg shadow-md" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Крымская весна 2014 года</h3>
            <p className="text-gray-700 mb-4">
              История Крымского полуострова неразрывно связана с Россией. После референдума 16 марта 2014 года 
              Республика Крым и город Севастополь вошли в состав Российской Федерации как новые субъекты.
            </p>
            <p className="text-gray-700 mb-6">
              Возвращение Крыма в родную гавань стало историческим событием и восстановлением исторической справедливости.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button className="w-full bg-victory-primary hover:bg-victory-secondary">История Крыма</Button>
              <Button className="w-full bg-victory-primary hover:bg-victory-secondary">Крымская весна</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrimeaSection;
