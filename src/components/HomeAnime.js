'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HomeAnime = () => {
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline()
        tl
        .set('#call-btn-1', {scale:0, transformOrigin:'50% 50%'})
        .fromTo('.hero-div', { scaleX: 0 }, {scaleX: 1, duration: 1,
            ease: "power2.out"})
        .from('.hero-text-1',   {xPercent:-10, duration:.7, opacity:0})
        .from('.hero-text-2', {xPercent:-10, duration:.7, delay:.3, opacity:0}, '<')
        .from('.punchline',     { y:-20, duration:1, opacity:0, delay:.3}, '<')
        .to('#call-btn-1',    { scale:1, rotation:360, duration:1.2, ease:'elastic.out'})
        .from('.hero-text-3', {xPercent:10, duration:.7, opacity:0, delay:.3}, '<')
        .from('.hero-text-4', {xPercent:10, duration:.7, opacity:0, delay:.3}, '<')
        .from('.hero-text-5', {xPercent:10, duration:.7, opacity:0, delay:.3}, '<')
        .from('.hero-text-6', {xPercent:10, duration:.7, opacity:0, delay:.3}, '<')

        gsap.to(".panel-container", {
        xPercent: -100,
        ease: "none", // Linear animation
        scrollTrigger: {
            trigger: ".panel-container",
            pin: true, // Pin the container
            scrub: 1, // Smooth scrubbing
            snap: 1 / 4, // Snap to each section (based on number of sections)
            end: "+=2000", // Adjust the end value based on content
            // You can add markers: true for visual debugging
        }
        });
      })    
}

export default HomeAnime


