import { Container } from "./Container.tsx";
import { site } from "../data/site.ts";

export function HomeHeader() {
  return (
    <header
      class="bg-[#84ea9a] relative min-h-[30vh]"
    >
      <Container>
        <h1 class="Header text-4xl lg:text-8xl font-bold absolute bottom-6 flex items-center">
          <span class = 'text-[#ffdc17] font-outline'>JS</span>
          <span class = 'text-[#e04d6e] font-outline'>Less</span>
        </h1>
      </Container>
    </header>
  );
}
