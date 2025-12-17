"use client";

import { useState } from "react";
import Image from "next/image";
import bookshelfImg from "@/image/bookshelf.png";

const testimonials = [
  {
    id: 1,
    quote:
      "Trives helped us navigate a critical pivot in our business strategy. Their insights were invaluable in clarifying our positioning and accelerating our growth trajectory.",
    author: "Sarah ",
    title: "",
  },
  {
    id: 2,
    quote:
      "Their strategic approach and no-nonsense methodology helped us cut through complexity and focus on what truly matters. An invaluable partner for any growing company.",
    author: "David P",
    title: "Managing Director",
  },
  {
    id: 3,
    quote:
      "The team brought fresh, disruptive thinking to our industry where most are reluctant to push boundaries. They've been a critical partner in establishing our brand presence.",
    author: "Yuki Y",
    title: "",
  },

];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#161717] py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src={bookshelfImg}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <p className="text-sm font-medium tracking-widest text-[#ACACA7] uppercase mb-16 text-center">
          What People Are Saying
        </p>

        <div className="max-w-4xl mx-auto">
          <blockquote className="text-center">
            <p className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed mb-8">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>
            <footer className="text-[#ACACA7]">
              <span className="block text-white font-medium">
                {testimonials[currentIndex].author}
              </span>
              <span className="text-sm">{testimonials[currentIndex].title}</span>
            </footer>
          </blockquote>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-2 text-[#ACACA7] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-[#ACACA7]/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 text-[#ACACA7] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
