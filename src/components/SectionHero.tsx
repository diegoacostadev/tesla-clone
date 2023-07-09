import {forwardRef} from "react";

export default forwardRef<HTMLElement>(function SectionHero(props, ref) {
  return (
    <section
      ref={ref}
      className="w-screen h-screen relative flex justify-center section"
      id="video"
    >
      <div className="relative z-10 max-w-xl text-center flex flex-col items-center flex-grow pb-20 pt-[calc(5vh+var(--header-height))]">
        <h2 className="text-4xl mb-3">Experience Tesla</h2>
        <p className="text-sm">Schedule a Demo Drive Today</p>
        <a
          className="mt-auto text-sm h-10 inline-flex items-center justify-center rounded border-[3px] border-white hover:bg-white hover:text-gray-900 transition-all duration-700 delay-500 min-w-[264px] px-4 py-1"
          href="#"
        >
          Demo Drive
        </a>
      </div>
      <video
        autoPlay
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/tesla-home.webm"
      />
    </section>
  );
});
