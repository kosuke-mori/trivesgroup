export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 lg:px-8">
      {/* Decorative line */}
      <div className="absolute top-20 left-0 right-0 h-px bg-[#DBDAD0]" />

      <div className="mx-auto max-w-7xl w-full">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl text-[#161717] mb-8">
          Your Decision System
        </h1>

        <div className="max-w-3xl space-y-6">
          <p className="text-lg sm:text-xl lg:text-2xl text-[#45494B] leading-relaxed">
            Trives is a hands-on consultancy that strengthens how ambitious companies decide, build, and grow.
            We work with early and established teams to clarify direction, sharpen priorities, and execute growth that compounds.
          
          </p>

          
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#DBDAD0]" />
    </section>
  );
}
