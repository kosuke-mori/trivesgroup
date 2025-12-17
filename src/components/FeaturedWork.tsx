"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import bookshelfImg from "@/image/bookshelf.png";
import meltedMatchaImg from "@/image/Melted-matcha.webp";
import tinnedInJapanImg from "@/image/Tinned-in-Japan.jpg";
import tokyoSkylineImg from "@/image/tokyo-skyline-v2.webp";

const projects: { id: number; name: string; category: string; image: StaticImageData }[] = [
  {
    id: 1,
    name: "Product & Marketing consultancy",
    category: "Stragegy",
    image: bookshelfImg,
  },
  {
    id: 2,
    name: "Melted Matcha",
    category: "Food & Beverage",
    image: meltedMatchaImg,
  },
  {
    id: 3,
    name: "Tinned in Japan",
    category: "Product",
    image: tinnedInJapanImg,
  },
  {
    id: 4,
    name: "Deep in Japan",
    category: "Travel & Lifestyle",
    image: tokyoSkylineImg,
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-[#161717] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <p className="text-sm font-medium tracking-widest text-[#ACACA7] uppercase">
          Featured Projects
        </p>
      </div>

      {/* Horizontal scrolling gallery */}
      <div className="horizontal-scroll">
        <div className="flex gap-6 px-6 lg:px-8 pb-4" style={{ width: "max-content" }}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href="#"
              className="group relative flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[500px] aspect-[4/3] overflow-hidden rounded-sm"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-[#DBDAD0] mb-1">{project.category}</p>
                <h3 className="text-xl font-medium text-white">{project.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-white hover:text-[#DBDAD0] transition-colors"
        >
          Contact us
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
