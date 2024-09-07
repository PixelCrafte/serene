import HeroSection from "@/components/HeroSection";

const heroRatings = [
  {
    number:'500',
    text:'Satisfied clients',
  },
  {
    number:'3000',
    text:'Hours of experience',
  },
  {
    number:'20',
    text:'Activities',
  },
  {
    number:'200',
    text:'Something else',
  }
]

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="h-screen">
      <HeroSection />
      <section className="bg-white flex gap-4 p-2 justify-center">
        {heroRatings.map((item, index)=> (
          <div key={`hero-rating-${index}`} className="sm:w-[200px] text-center">
            <h2 className="font-bold sm:text-3xl text-lg">{item.number}+</h2>
            <p className="font-light text-xs sm:text-lg">{item.text}</p>
          </div>
        ))}
      </section>
      </div>
    </main>
  );
}
