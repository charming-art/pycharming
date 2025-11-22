import {defineConfig} from "vitepress";
import terminal from "./markdown-it-terminal.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "gh2",
  description: "The creative coding language for ASCII art and poetic form",
  appearance: "force-dark",
  head: [["link", {rel: "icon", type: "image/png", href: "/icon-black.png"}]],
  cleanUrls: true,
  markdown: {
    config: (md) => terminal(md),
  },
  themeConfig: {
    logo: "/icon.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: "Docs", link: "/docs/what-is-pycharming"},
      {text: "Examples", link: "/examples/zeros"},
      {text: "Editor", link: "https://editor.gh2.dev/"},
    ],
    sidebar: {
      "/docs": [
        {
          text: "Introduction",
          items: [
            {text: "What is PyCharming?", link: "/docs/what-is-pycharming"},
            {text: "Why PyCharming?", link: "/docs/why-pycharming"},
            {text: "Migration", link: "/docs/migration"},
            {text: "API Index", link: "/docs/api/readme"},
          ],
        },
        {
          text: "Features",
          items: [
            {text: "Structure", link: "/docs/tutorials/structure"},
            {text: "Color", link: "/docs/tutorials/color"},
            {text: "Event", link: "/docs/tutorials/event"},
            {text: "Image", link: "/docs/tutorials/image"},
            {text: "Typography", link: "/docs/tutorials/typography"},
            {text: "Helper", link: "/docs/tutorials/helper"},
            {text: "Shape", link: "/docs/tutorials/shape"},
          ],
        },
        {
          text: "API Reference",
          items: [
            {text: "Color", link: "/docs/api/color"},
            {text: "Constants", link: "/docs/api/constants"},
            {text: "Environment", link: "/docs/api/environment"},
            {text: "Events", link: "/docs/api/events"},
            {text: "Helpers", link: "/docs/api/helpers"},
            {text: "Image", link: "/docs/api/image"},
            {text: "IO", link: "/docs/api/io"},
            {text: "Math", link: "/docs/api/math"},
            {text: "Shape", link: "/docs/api/shape"},
            {text: "Structure", link: "/docs/api/structure"},
            {text: "Time", link: "/docs/api/time"},
            {text: "Transform", link: "/docs/api/transform"},
            {text: "Typography", link: "/docs/api/typography"},
          ],
        },
      ],
      "/examples": [
        {text: "Gallery", link: "/examples/readme"},
        {text: "Information", link: "/examples/information"},
        {text: "Mandelbrot Set", link: "/examples/mandelbrot-set"},
        {text: "Bar Chart", link: "/examples/bar"},
        {text: "BFS", link: "/examples/bfs"},
        {text: "Bubble Sort", link: "/examples/bubble"},
        {text: "DFS", link: "/examples/dfs"},
        {text: "Globe", link: "/examples/globe"},
        {text: "Heart", link: "/examples/heart"},
        {text: "Insertion Sort", link: "/examples/insertion"},
        {text: "Merge Sort", link: "/examples/merge"},
        {text: "Pie Chart", link: "/examples/pie"},
        {text: "Prim", link: "/examples/prim"},
        {text: "Snake", link: "/examples/snake"},
      ],
    },
    socialLinks: [{icon: "github", link: "https://github.com/gh2hq/gh2"}],
    footer: {
      message:
        "Library released under <a style='text-decoration:underline;' href='https://github.com/gh2hq/gh2/blob/main/LICENSE'>ISC License</a>.",
      copyright: `Copyright 2020–${new Date().getUTCFullYear()} Bairui Su.`,
    },
  },
});
