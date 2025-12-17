import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-[#161717] mb-8">
          Let&apos;s do this.
        </h2>

        <Link
          href="https://light-starburst-795.notion.site/2652634eb2d680119ba5db91eab359b7?pvs=105"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#161717] text-white font-medium hover:bg-[#45494B] transition-colors rounded-sm"
        >
          Get in touch
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
