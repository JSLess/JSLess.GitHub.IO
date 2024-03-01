import { Container } from "./Container.tsx";
import { site } from "../data/site.ts";
import Nav from "./Nav.tsx";

export function HomeHeader() {
  return (
    <header
      class="bg-[#84ea9a] relative min-h-[30vh]"
      style = 'user-select:none;background :linear-gradient(140deg, #92cf92 0%, #79d68b 37%, #79d68b 60%, #92cf92 100%)'
    >
      <div class="px-4 mx-auto max-w-screen-md abc">
        <h1 class="font-mono Header text-4xl lg:text-8xl font-bold flex items-center">
          <span class = 'text-[#ffdc17] font-outline'>𝗝𝗦</span>
          <span class = 'text-[#e04d6e] font-outline'>𝗟𝗲𝘀𝘀</span>
        </h1>
        <Nav/>
      </div>
    </header>
  );
}
