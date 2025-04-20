
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Logo2025 from "@/components/Logo2025";
import { ArrowRight, BookOpen, Medal, Users, Tank, FileText, Map, Medal2, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f1f0fb]">
      {/* Header */}
      <header className="bg-[#1A1F2C] text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Logo2025 />
            <h1 className="text-2xl font-bold">Уроки Победы</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">Главная</a></li>
              <li><a href="#military-tech" className="hover:text-[#9b87f5] transition-colors">Военная техника</a></li>
              <li><a href="#documents" className="hover:text-[#9b87f5] transition-colors">Документация</a></li>
              <li><a href="#crimea" className="hover:text-[#9b87f5] transition-colors">Крым</a></li>
              <li><a href="#heroes" className="hover:text-[#9b87f5] transition-colors">Герои</a></li>
              <li><a href="#donbass" className="hover:text-[#9b87f5] transition-colors">Донбасс и СВО</a></li>
            </ul>
          </nav>
          <Button className="md:hidden" variant="ghost">
            <span className="sr-only">Меню</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </header>

      {/* Hero section */}
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

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Особенности проекта</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#E5DEFF] p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="text-[#6E59A5]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Интерактивные материалы</h3>
                <p className="text-gray-600">
                  Увлекательные уроки с использованием современных технологий обучения
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#E5DEFF] p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Medal className="text-[#6E59A5]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Исторические факты</h3>
                <p className="text-gray-600">
                  Достоверная информация о ключевых событиях и героях Великой Отечественной войны
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#E5DEFF] p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-[#6E59A5]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Командные проекты</h3>
                <p className="text-gray-600">
                  Возможность участия в коллективных исследовательских работах и конкурсах
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 1. ВОЕННАЯ ТЕХНИКА */}
      <section id="military-tech" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Tank className="text-[#9b87f5] mr-3 h-8 w-8" />
            <h2 className="text-3xl font-bold text-[#1A1F2C]">Рассказы о военной технике</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/placeholder.svg" alt="Т-34" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Легендарный Т-34</h3>
                <p className="text-gray-600 mb-4">История создания и боевого применения танка, ставшего символом Победы</p>
                <Button className="w-full bg-victory-primary hover:bg-victory-secondary">Подробнее</Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/placeholder.svg" alt="Катюша" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">«Катюша» БМ-13</h3>
                <p className="text-gray-600 mb-4">Реактивная система залпового огня, внушавшая ужас противнику</p>
                <Button className="w-full bg-victory-primary hover:bg-victory-secondary">Подробнее</Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/placeholder.svg" alt="Ил-2" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Штурмовик Ил-2</h3>
                <p className="text-gray-600 mb-4">«Летающий танк» — грозное оружие советских ВВС</p>
                <Button className="w-full bg-victory-primary hover:bg-victory-secondary">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 2. ДИРЕКТИВЫ И ДОКУМЕНТАЦИЯ */}
      <section id="documents" className="py-16 bg-[#f1f0fb]">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <FileText className="text-[#9b87f5] mr-3 h-8 w-8" />
            <h2 className="text-3xl font-bold text-[#1A1F2C]">Директивы и важная документация</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-victory-primary hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Приказ №227 «Ни шагу назад!»</h3>
                <p className="text-gray-600 mb-4">Исторический контекст принятия приказа и его значение для хода войны</p>
                <Button variant="outline" className="w-full border-victory-primary text-victory-primary hover:bg-victory-light">Изучить документ</Button>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-victory-primary hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Акт о безоговорочной капитуляции</h3>
                <p className="text-gray-600 mb-4">Документ, официально завершивший Вторую мировую войну в Европе</p>
                <Button variant="outline" className="w-full border-victory-primary text-victory-primary hover:bg-victory-light">Изучить документ</Button>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-victory-primary hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">План «Барбаросса»</h3>
                <p className="text-gray-600 mb-4">Анализ немецкого плана молниеносной войны против СССР и причины его провала</p>
                <Button variant="outline" className="w-full border-victory-primary text-victory-primary hover:bg-victory-light">Изучить документ</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. ИСТОРИЯ КРЫМА */}
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

      {/* 4. ГЕРОИ ВОВ И СВО */}
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
                {[
                  { name: "Георгий Жуков", desc: "Маршал Советского Союза, четырежды Герой Советского Союза" },
                  { name: "Александр Матросов", desc: "Закрыл своим телом амбразуру вражеского дзота" },
                  { name: "Зоя Космодемьянская", desc: "Первая женщина, удостоенная звания Героя Советского Союза (посмертно)" }
                ].map((hero, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                    <img src="/placeholder.svg" alt={hero.name} className="w-full h-56 object-cover" />
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">{hero.name}</h3>
                      <p className="text-gray-600 mb-4">{hero.desc}</p>
                      <Button variant="outline" className="w-full">Узнать больше</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="svo">
              <div className="grid md:grid-cols-3 gap-6">
                {Array.from({length: 3}).map((_, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                    <img src="/placeholder.svg" alt={`Герой СВО ${i+1}`} className="w-full h-56 object-cover" />
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">Герой России</h3>
                      <p className="text-gray-600 mb-4">Проявил мужество и героизм при выполнении боевых задач</p>
                      <Button variant="outline" className="w-full">Узнать больше</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 5. СТРАДАНИЯ ДОНБАССА И СВО */}
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

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Logo2025 />
              <p className="text-lg font-bold">Уроки Победы</p>
            </div>
            <p className="text-sm text-gray-400">© 2025 Образовательный проект «Уроки Победы». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
