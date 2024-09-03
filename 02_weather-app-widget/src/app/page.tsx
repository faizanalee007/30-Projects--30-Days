import WeatherWidget from "@/components/WeatherWidget";
import Image from "next/image";

export default function Home() {
  return (
    
    <div className="flex items-center justify-center h-[100vh]">
      <WeatherWidget />
    </div>
  );
}
