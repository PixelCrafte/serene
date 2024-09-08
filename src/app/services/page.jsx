import ServicesHeroSection from "./SevicesHeroSection";
import ServiceCard from "@/components/ServiceCard";
import services from "@/content/services";
import SpecialOffersSection from "./SpecialOffersSection";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <ServicesHeroSection />
      <h1 className='text-3xl font-bold text-center my-8'>Our Services</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((serv, index)=> <ServiceCard key={'services-map-'+{index}} {...serv} index={index}/>)}
      </section>
      <SpecialOffersSection />
    </main>
)
}

export default page
