
import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import config from './tailwind.config.ts'

export default defineConfig({
    plugins: [tailwind(config)],
});