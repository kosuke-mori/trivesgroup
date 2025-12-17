import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
          alt="Modern workspace"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
