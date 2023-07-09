import {forwardRef} from "react";

export default forwardRef<HTMLElement>(function SectionCharge(props, ref) {
  return (
    <section
      ref={ref}
      data-header-dark
      className="section w-screen h-screen relative flex justify-center"
    >
      <div className="text-black relative z-10 max-w-xl text-center flex flex-col items-center flex-grow pb-20 pt-[calc(5vh+var(--header-height))]">
        <h2 className="text-4xl mb-3">Model Y</h2>
        <p className="text-sm">
          Starting at $40,240 <br />
          After Federal Tax Credit
        </p>
        <div className="flex gap-x-3 mt-auto">
          <a
            className="text-sm h-10 inline-flex items-center justify-center rounded bg-white min-w-[264px] px-4 py-1 text-dark"
            href="#"
          >
            Demo Drive
          </a>
          <a
            className="mt-auto text-sm h-10 inline-flex items-center justify-center rounded bg-gray-800 text-white min-w-[264px] px-4 py-1"
            href="#"
          >
            Demo Drive
          </a>
        </div>
      </div>
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="/model-y.avif" />
    </section>
  );
});
