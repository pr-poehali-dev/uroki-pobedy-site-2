
import { Button } from "@/components/ui/button";
import Logo2025 from "@/components/Logo2025";

const Header = () => {
  return (
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
  );
};

export default Header;
