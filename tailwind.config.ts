
import { type Config } from "tailwindcss";
import colors from 'tailwindcss/colors'

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  selfURL: import.meta.url,
  setup: {
    theme: {
      colors: {
        yellow: '#84ea9a',
        transparent: 'transparent',
      },
    },
  },
} satisfies Config;
