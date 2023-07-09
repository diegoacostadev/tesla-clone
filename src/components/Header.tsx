import {MouseEvent, useRef} from "react";

const MAIN_MENU_LINKS = [
  {
    url: "#",
    title: "Model S",
  },
  {
    url: "#",
    title: "Model 3",
  },
  {
    url: "#",
    title: "Model X",
  },
  {
    url: "#",
    title: "Model Y",
  },
  {
    url: "#",
    title: "Solar Roof",
  },
  {
    url: "#",
    title: "Solar Panels",
  },
  {
    url: "#",
    title: "Powerwall",
  },
];

const SIDE_MENU = [
  {
    url: "#",
    title: "Shop",
  },
  {
    url: "#",
    title: "Account",
  },
  {
    url: "#",
    title: "Menu",
  },
];

export default function Header({isDark}: {isDark: boolean}) {
  const menuBackDropRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (ev: MouseEvent<HTMLAnchorElement>) => {
    const {currentTarget} = ev;
    const {x, y, width, height} = currentTarget.getBoundingClientRect();

    menuBackDropRef.current?.style.setProperty("--left", `${x}px`);
    menuBackDropRef.current?.style.setProperty("--top", `${y}px`);
    menuBackDropRef.current?.style.setProperty("--width", `${width}px`);
    menuBackDropRef.current?.style.setProperty("--height", `${height}px`);
    menuBackDropRef.current?.style.setProperty("--opacity", "1");
  };

  const handleMouseLeave = () => {
    menuBackDropRef.current?.style.setProperty("--opacity", "0");
  };

  return (
    <header className="flex justify-between px-10 items-center fixed top-0 start-0 end-0 z-40">
      <h1 className="logo h-14 flex items-center ps-2 flex-grow basis-0">
        <a className={`logo-link block${isDark ? " text-gray-900" : " text-white"}`} href="#">
          <svg className="w-[120px] h-6" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
              fill="currentColor"
            />
          </svg>
        </a>
      </h1>
      <nav className="main-menu px-2">
        <ol className="py-0 px-2 m-0 list-none flex">
          {MAIN_MENU_LINKS.map((l) => (
            <li key={l.title}>
              <a
                className={`px-4 py-1 flex items-center text-sm h-8 font-medium transition-colors duration-300 ${
                  isDark ? "text-gray-900" : "text-white"
                }`}
                href={l.url}
                title={l.title}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span>{l.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <nav className="side-menu flex-grow flex justify-end basis-0">
        <ol className="p-0 m-0 list-none flex">
          {SIDE_MENU.map((l) => (
            <li key={l.title}>
              <a
                className={`px-4 py-1 flex items-center text-sm h-8 font-medium transition-colors duration-300 ${
                  isDark ? "text-gray-900" : "text-white"
                }`}
                href={l.url}
                title={l.title}
                onMouseEnter={handleMouseEnter}
              >
                <span>{l.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div
        ref={menuBackDropRef}
        className={`
                absolute -z-[1] bg-black/5 backdrop-blur-lg rounded start-0 top-0
                translate-x-[var(--left)] translate-y-[var(--top)]
                w-[var(--width)] h-[var(--height)]
                opacity-[var(--opacity)]
                transition-all duration-500 ease-in-out
        `}
        id="menu-backdrop"
      />
    </header>
  );
}
