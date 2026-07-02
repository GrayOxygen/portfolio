// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  // site: "https://sorolla.casset.cat/",
  output: 'static',
  integrations: [mdx(), sitemap(), icon(), tailwind()],
});