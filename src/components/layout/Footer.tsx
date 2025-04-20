
import Logo2025 from "@/components/Logo2025";

const Footer = () => {
  return (
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
  );
};

export default Footer;
