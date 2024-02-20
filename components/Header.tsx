import { site } from "../data/site.ts";
import Nav from "./Nav.tsx";

export function Header() {
  return (
    <header class="px-6 py-3 bg-[#84ea9a] h-16 flex items-center justify-between">
      <div class="px-4 max-w-screen-md">
        <a href="/" class="text-2xl font-bold hover:text-underline">
        <span class = 'text-[#ffdc17] font-outline-2'>JS</span>
          <span class = 'text-[#e04d6e] font-outline-2'>Less</span>
        </a>
      </div>
      <Nav/>
    </header>
  );
}
