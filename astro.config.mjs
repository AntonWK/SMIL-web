import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkReadingTime from "remark-reading-time";

export default defineConfig({
  site: "https://astrostarterpro.com/",
  integrations: [sitemap(), icon(), mdx()],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      () => {
        return function (_tree, file) {
          file.data.astro.frontmatter.minutesRead =
            file.data.readingTime.minutes;
        };
      },
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss(),

      {
        name: "fix-tailwind-ssr-bug",
        enforce: "post",
        config(config) {
          if (
            config.build &&
            config.build.rollupOptions &&
            config.build.rollupOptions.input === "index.html"
          ) {
            config.build.rollupOptions.input = undefined;
          }
        },
      },
    ],
  },
});
