import { site } from "../data/site.ts";

export function Header() {
  return (
    <header class="px-3 py-3 bg-[#84ea9a] h-16 flex items-center">
      <div class="px-4 max-w-screen-md">
        <a href="/" class="text-2xl font-bold hover:text-underline">
        <span class = 'text-[#ffdc17] font-outline-2'>JS</span>
          <span class = 'text-[#e04d6e] font-outline-2'>Less</span>
        </a>
      </div>
    </header>
  );
}
