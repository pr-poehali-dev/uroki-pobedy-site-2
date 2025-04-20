
import { useEffect, useState } from "react";

const Logo2025 = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Функция для обновления статуса онлайн
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Добавляем слушатели событий для отслеживания соединения
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Убираем слушатели при размонтировании компонента
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <circle cx="30" cy="30" r="30" fill="#9b87f5" />
          <path
            d="M20 20H40V25H35V40H25V25H20V20Z"
            fill="#fff"
          />
          <path
            d="M15 14L17 17M45 14L43 17M30 10V15"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text
            x="30"
            y="50"
            fontSize="12"
            fill="#fff"
            textAnchor="middle"
            fontWeight="bold"
          >
            2025
          </text>
        </svg>
        
        {/* Индикатор статуса онлайн */}
        <div className="flex items-center">
          <div 
            className={`w-2 h-2 rounded-full mr-1 ${
              isOnline ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span className="text-xs">
            {isOnline ? "Онлайн" : "Офлайн"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo2025;
