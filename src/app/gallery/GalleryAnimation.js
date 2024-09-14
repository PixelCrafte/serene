'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GalleryAnimation = () => {
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl
        .fromTo('.hero-div', { scaleX: 0 }, {scaleX: 1, duration: 2,
            ease: "power2.out", })
        .from('.hero-text-1',   {xPercent:-10, duration:.7, opacity:0})
        .from('.punchline',     { y:-20, duration:1, opacity:0 })
        .from('.call-btn',      { y:150, duration:.5, opacity:0, ease:'bounce.out'})
      })    
}

export default GalleryAnimation


