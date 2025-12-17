const clients = [
  { name: "Acme Corp", logo: "ACME" },
  { name: "GlobalTech", logo: "GLOBALTECH" },
  { name: "Innovate Inc", logo: "INNOVATE" },
  { name: "FutureCo", logo: "FUTURECO" },
  { name: "NextGen", logo: "NEXTGEN" },
  { name: "PrimeVentures", logo: "PRIME" },
  { name: "Apex Group", logo: "APEX" },
  { name: "Vertex Labs", logo: "VERTEX" },
];

export default function ClientLogos() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white border-b border-[#DBDAD0]">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium tracking-widest text-[#ACACA7] uppercase mb-12 text-center">
          Trusted Partners
        </p>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-sm font-bold tracking-wider text-[#45494B]">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
