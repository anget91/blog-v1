// src/app/page.tsx
"use client";
import { useEffect, useState } from "react";
import { Bloque } from "@/components/Bloque";

const Home: React.FC = () => {
  const [bloques, setBloques] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/bloques.json");
      const data = await res.json();
      setBloques(data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {bloques.map((bloque) => (
        <Bloque key={bloque.id} bloque={bloque} />
      ))}
    </div>
  );
};

export default Home;
