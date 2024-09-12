//import Gallery from "./Gallery";
// import { createClient } from '@/prismicio';
import Link from 'next/link';
// import { PrismicNextImage } from '@prismicio/next';
import Gallery from './Gallery';
import { GiMachineGunMagazine } from 'react-icons/gi';


async function Media () {
	// const client = createClient();
	// const images = await client.getAllByType('image_gallery');
return (
  <main>
  	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Media</h1>
      {/* hero section for gallery */}
      <section className=''>
        other stuff
      </section>
      <h1 className='section-heading slide-in-top'>Gallery</h1>      
      {/* the gallery Slide here down here */}
      <Gallery />
  </main>
 )
}
export default Media