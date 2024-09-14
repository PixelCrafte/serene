'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomeAnime = () => {
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl
        .set('#call-btn-1', {scale:0, transformOrigin:'50% 50%'})
        .fromTo('.hero-div', { scaleX: 0 }, {scaleX: 1, duration: 1,
            ease: "power2.out"})
        .from('.hero-text-1',   {xPercent:-10, duration:.7, opacity:0})
        .from('.hero-text-2', {xPercent:-10, duration:.7, delay:.3, opacity:0}, '<')
        .from('.punchline',     { y:-20, duration:1, opacity:0, delay:.3}, '<')
        .to('#call-btn-1',    { scale:1, rotation:360, duration:1.2, ease:'elastic.out'})
      })    
}

export default HomeAnime


