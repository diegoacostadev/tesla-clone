"use client";
import {useEffect, useMemo, useRef, useState} from "react";

import SectionHero from "@/components/SectionHero";
import SectionCharge from "@/components/SectionCharge";
import Header from "@/components/Header";

export default function Home() {
  const [headerDark, setHeaderDark] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  const observer = useMemo(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const {isIntersecting} = entry;

        if (isIntersecting) {
          const isDark = entry.target.getAttribute("data-header-dark");

          if (isDark) {
            setHeaderDark(true);
          } else {
            setHeaderDark(false);
          }
        }
      });
    }, options);
  }, []);

  useEffect(() => {
    sectionsRef.current.forEach((s) => {
      observer.observe(s);
    });

    () => observer.disconnect();
  }, [observer]);

  return (
    <>
      <Header isDark={headerDark} />
      <main className="w-full h-screen overflow-auto snap-y snap-mandatory">
        <div className="snap-start">
          <SectionHero ref={(el: HTMLElement) => sectionsRef.current.push(el!)} />
        </div>
        <div className="snap-start">
          <SectionCharge ref={(el: HTMLElement) => sectionsRef.current.push(el!)} />
        </div>
        <div className="snap-start">
          <SectionHero ref={(el: HTMLElement) => sectionsRef.current.push(el!)} />
        </div>
        <div className="snap-start">
          <SectionCharge ref={(el: HTMLElement) => sectionsRef.current.push(el!)} />
        </div>
      </main>
    </>
  );
}
