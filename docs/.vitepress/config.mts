import {defineConfig} from "vitepress";
import terminal from "./markdown-it-terminal.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PyCharming",
  description: "Character Terminal Art Programming - A creative coding language for ASCII art and poetic form",
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
      {text: "Examples", link: "/examples/overview"},
    ],
    sidebar: {
      "/docs": [
        {
          text: "Introduction",
          collapsed: false,
          items: [
            {text: "What is PyCharming?", link: "/docs/what-is-pycharming"},
            {text: "Why PyCharming?", link: "/docs/why-pycharming"},
            {text: "Get Started", link: "/docs/get-started"},
            {text: "API Index", link: "/docs/api/readme"},
          ],
        },
        {
          text: "Features",
          collapsed: false,
          items: [
            {text: "Structure", link: "/docs/tutorials/structure"},
            {text: "Shape", link: "/docs/tutorials/shape"},
            {text: "Color", link: "/docs/tutorials/color"},
            {text: "Event", link: "/docs/tutorials/event"},
            {text: "Image", link: "/docs/tutorials/image"},
            {text: "Typography", link: "/docs/tutorials/typography"},
            {text: "Helper", link: "/docs/tutorials/helper"},
          ],
        },
        {
          text: "API Reference",
          collapsed: false,
          items: [
            {text: "Color", link: "/docs/api/color"},
            {text: "Constants", link: "/docs/api/constants"},
            {text: "Environment", link: "/docs/api/environment"},
            {
              text: "Events",
              link: "/docs/api/events",
              collapsed: true,
              items: [
                {text: "Keyboard", link: "/docs/api/events-keyboard"},
                {text: "Mouse", link: "/docs/api/events-mouse"},
                {text: "Cursor", link: "/docs/api/events-cursor"},
              ],
            },
            {text: "Helpers", link: "/docs/api/helpers"},
            {
              text: "Image",
              link: "/docs/api/image",
              collapsed: true,
              items: [
                {text: "CImage", link: "/docs/api/image-cimage"},
                {text: "Display", link: "/docs/api/image-display"},
              ],
            },
            {text: "IO", link: "/docs/api/io"},
            {
              text: "Math",
              link: "/docs/api/math",
              collapsed: true,
              items: [
                {text: "CVector", link: "/docs/api/math-cvector"},
                {text: "Calculation", link: "/docs/api/math-calculation"},
                {text: "Trigonometry", link: "/docs/api/math-trigonometry"},
                {text: "Random", link: "/docs/api/math-random"},
              ],
            },
            {
              text: "Shape",
              link: "/docs/api/shape",
              collapsed: true,
              items: [
                {text: "2D Primitives", link: "/docs/api/shape-primitives"},
                {text: "Attributes", link: "/docs/api/shape-attributes"},
                {text: "Vertex", link: "/docs/api/shape-vertex"},
                {text: "Curves", link: "/docs/api/shape-curves"},
              ],
            },
            {text: "Structure", link: "/docs/api/structure"},
            {text: "Time", link: "/docs/api/time"},
            {text: "Transform", link: "/docs/api/transform"},
            {text: "Typography", link: "/docs/api/typography"},
          ],
        },
      ],
      "/examples": [
        {text: "Overview", link: "/examples/overview"},
        {
          text: "Basic Examples",
          collapsed: false,
          items: [
        {text: "Zeros", link: "/examples/zeros"},
        {text: "Information", link: "/examples/information"},
        {text: "Mandelbrot Set", link: "/examples/mandelbrot-set"},
          ],
        },
        {
          text: "Visualizations",
          collapsed: false,
          items: [
            {text: "Bar Chart", link: "/examples/bar"},
            {text: "Pie Chart", link: "/examples/pie"},
            {text: "Globe", link: "/examples/globe"},
            {text: "Heart", link: "/examples/heart"},
          ],
        },
        {
          text: "Algorithms",
          collapsed: false,
          items: [
            {text: "BFS", link: "/examples/bfs"},
            {text: "DFS", link: "/examples/dfs"},
            {text: "Prim", link: "/examples/prim"},
            {text: "Bubble Sort", link: "/examples/bubble"},
            {text: "Insertion Sort", link: "/examples/insertion"},
            {text: "Merge Sort", link: "/examples/merge"},
          ],
        },
        {
          text: "Games",
          collapsed: false,
          items: [
            {text: "Snake", link: "/examples/snake"},
          ],
        },
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
