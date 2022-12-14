import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://wwww.dwiananta.link',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx(), sitemap(), compress(), prefetch(), robotsTxt({
    sitemap: false
  })]
});