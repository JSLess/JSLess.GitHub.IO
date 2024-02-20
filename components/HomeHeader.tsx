import { Container } from "./Container.tsx";
import { site } from "../data/site.ts";
import Nav from "./Nav.tsx";

export function HomeHeader() {
  return (
    <header
      class="bg-[#84ea9a] relative min-h-[30vh]"
    >
      <div class="px-4 mx-auto max-w-screen-md abc">
        <h1 class="Header text-4xl lg:text-8xl font-bold flex items-center">
          <span class = 'text-[#ffdc17] font-outline'>JS</span>
          <span class = 'text-[#e04d6e] font-outline'>Less</span>
        </h1>
        <Nav/>
      </div>
    </header>
  );
}
