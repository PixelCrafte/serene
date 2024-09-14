// import { createClient } from '@/prismicio';
import Link from 'next/link';
// import { PrismicNextImage } from '@prismicio/next';
import Gallery from './Gallery';
import dynamic from 'next/dynamic';

const BasicAnimations = dynamic(() => import('@/components/BasicAnimations'), { ssr: false });

async function Media () {
	// const client = createClient();
	// const images = await client.getAllByType('image_gallery');
return (
  <main>
  	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Activities</h1>
      {/* the gallery Slide here down here */}
      <p className='font-light text-black text-center slide-in-bottom'>Have a look at some of our activities</p>
      <Gallery />
      <BasicAnimations />
  </main>
 )
}
export default Media