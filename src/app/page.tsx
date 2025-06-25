"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";

const categories = [
  { title: "Singers", image: "https://imgs.search.brave.com/6RaC-_W3rbYeHdouVpR60ZJG4woJPtb5MkKT2fJ3wz8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXVjYXNpYW4t/ZmVtYWxlLXNpbmdl/ci1wb3J0cmFpdC1p/c29sYXRlZC1wdXJw/bGUtc3R1ZGlvLWJh/Y2tncm91bmQtbmVv/bi1saWdodF80ODk2/NDYtMTQ4NDQuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MA" },
  { title: "Dancers", image: "https://imgs.search.brave.com/lkqHmXClTGLtF4cqJdwwrnHCxzHb4rrsYkiqvt-mjQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktZGFuY2lu/Zy1oaXAtaG9wLXN0/eWxpc2gtY2xvdGhl/cy1ncmFkaWVudC1i/YWNrZ3JvdW5kLWRh/bmNlLWhhbGwtbmVv/bi1saWdodF80ODk2/NDYtNDUxMC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw" },
  { title: "DJs", image: "https://imgs.search.brave.com/x3D4kuhQmmUOB1dJ9sjxdPd6wbz7x0dCLEDFr5Zcseo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjIzODYwMTAyNzMt/NjQ2ZTEyZDFjMDJm/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1ueDhaR29s/TWpCdGFYaGxjbnhs/Ym53d2ZId3dmSHg4/TUE9PQ" },
  { title: "Speakers", image: "https://imgs.search.brave.com/a2DJz7kfVQoqH5sX3Jzq-VTORukVsF6bLjBt2-KPI_E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzY4LzYyLzc5/LzM2MF9GXzY2ODYy/NzkwNl9kejBzdTFN/dW5GZVAzMEpxY3BQ/eVJnU1FRZ1hsbmxr/dS5qcGc" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <section className="py-10 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore Artist Categories</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} title={cat.title} image={cat.image} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
