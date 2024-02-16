
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
        yellow: colors.yellow,
        transparent: 'transparent',
      },
    },
  },
} satisfies Config;
