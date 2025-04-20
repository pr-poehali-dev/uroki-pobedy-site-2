
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Logo2025 from "@/components/Logo2025";
import { ArrowRight, BookOpen, Medal, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f1f0fb]">
      {/* Header */}
      <header className="bg-[#1A1F2C] text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Logo2025 />
            <h1 className="text-2xl font-bold">Уроки Победы</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">Главная</a></li>
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">Уроки</a></li>
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">Материалы</a></li>
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">О проекте</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-16 bg-[#6E59A5] text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Образовательный проект «Уроки Победы»</h2>
            <p className="text-lg mb-6">
              Инновационная программа, направленная на сохранение исторической памяти и 
              патриотическое воспитание молодежи через изучение истории Великой Отечественной войны.
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

      {/* Content Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Образовательные материалы</h2>
          
          <Tabs defaultValue="lessons" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto mb-8">
              <TabsTrigger value="lessons">Уроки</TabsTrigger>
              <TabsTrigger value="materials">Методические материалы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lessons">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                    <img src="/placeholder.svg" alt={`Урок ${i}`} className="w-full h-48 object-cover" />
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">Урок {i}: Тема урока</h3>
                      <p className="text-gray-600 mb-4">Краткое описание содержания урока и основных изучаемых вопросов</p>
                      <Button variant="outline" className="w-full">Перейти к уроку</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="materials">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">Методическое пособие {i}</h3>
                      <p className="text-gray-600 mb-4">Материалы для педагогов по организации эффективных уроков</p>
                      <Button variant="outline" className="w-full">Скачать материал</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
