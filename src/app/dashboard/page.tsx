"use client";

import { useEffect, useState } from "react";
import DashboardTable from "@/components/DashboardTable";
import Header from "@/components/Header";
import data from "@/sampleData/artists.json";
import Footer from "@/components/Footer";
interface Artist {
  id: number;
  name: string;
  category: string;
  location: string;
  price: string;
}

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState<Artist[]>([]);

  useEffect(() => {
    setSubmissions(data); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <Header />
      <h1 className="text-2xl font-bold mb-6 text-center mt-10">Manager Dashboard</h1>

      <DashboardTable data={submissions} />
    
    </div>
   
  );
}
