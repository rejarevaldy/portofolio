import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_BTic5Fvv.mjs';
/* empty css                         */
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                               */

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header> <nav class="relative container mx-auto px-10 py-6"> <div class="flex items-center justify-between"> <div class="pt-2"> <h1 class="text-secondary-300 font-bold hover:text-accent"> <a href="/">
/home/revv/<span class="animate-blink">_</span> </a> </h1> </div> <div class="hidden md:flex space-x-6 text-secondary-200 items-center"> <a href="./blog" class="hover:text-accent duration-200 ease-in-out transition-all">Blog</a> <a href="./projects" class="hover:text-accent duration-200 ease-in-out transition-all">Project</a> <a href="./experience" class="hover:text-accent duration-200 ease-in-out transition-all">Experience</a> <span class="text-secondary-100"> | </span> <a href="https://github.com/rejarevaldy" class="flex items-center h-full hover:text-accent"> <i class="i-lucide-github w-4.5 h-4.5"></i> </a> <a href="https://www.linkedin.com/in/rejarevaldyf/" class="flex items-center h-full hover:text-accent"> <i class="i-lucide-linkedin w-4.5 h-4.5"></i> </a> <a href="mailto:rejarevaldyf@gmail.com" class="flex items-center h-full hover:text-accent"> <i class="i-lucide-mail w-4.5 h-4.5"></i> </a> </div> <div class="md:hidden"> <button id="menu-toggle" class="text-secondary-300 focus:outline-none flex items-center h-full"> <i class="i-lucide-gantt-chart w-6 h-6"></i> </button> </div> </div> </nav> <div id="mobile-menu" class="hidden md:hidden bg-primary-100 text-secondary-200 py-2 absolute w-full z-30 px-10 h-full"> <a href="./blog" class="block py-3 hover:text-accent duration-200 ease-in-out transition-all">Blog</a> <a href="./projects" class="block py-3 hover:text-accent duration-200 ease-in-out transition-all">Project</a> <a href="./Experience" class="block py-3 hover:text-accent duration-200 ease-in-out transition-all">Experience</a> <a href="https://github.com/rejarevaldy" class="block py-3 hover:text-accent duration-200 ease-in-out transition-all">Github</a> <a href="https://www.linkedin.com/in/rejarevaldyf/" class="block py-3 hover:text-accent duration-200 ease-in-out transition-all">Linkedin</a> <a href="mailto:rejarevaldyf@gmail.com" class="block py-3 hover:text-accent duration-200 ease-in-out transition-all">Mail</a> </div> </header>`;
}, "C:/laragon/www/dev/port/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/laragon/www/dev/port/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="stylesheet" href="../styles/main.css"><link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-primary-100 font-primary"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/laragon/www/dev/port/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer> <div class="container mx-auto px-7 py-6 text-secondary-100"> <p class="text-center">&copy; 2021 Revv. All rights reserved.</p> </div> </footer>`;
}, "C:/laragon/www/dev/port/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "/home/revv/experience" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="container flex px-4 mx-auto my-24 h-full max-w-5xl"> <div class="w-full"> <h1 class="text-secondary-300 text-2xl font-bold text-start mb-8"> <span class="text-accent font-bold mr-1"> | </span>
Experience
</h1> <div class="mb-5"> <section class="py-5"></section> </div> <h1 class="text-secondary-300 text-2xl font-bold text-start mb-8"> <span class="text-accent font-bold mr-1"> | </span>
Certifications & Licenses
</h1> <div class="mb-5"> <section class="py-5"> <h2 class="text-secondary-200 text-lg font-bold"> <span class="text-accent font-bold">🞄</span> Web Developer
</h2> <p class="text-secondary-100 text-base"> <span class="text-secondary-100 invisible md:visible md:mr-2">
|
</span>
2020 - 2021
</p> <p class="text-secondary-100 text-base"> <span class="text-secondary-100 invisible md:visible md:mr-2">
|
</span>
PT. Revv
</p> <p class="text-secondary-100 text-base"> <span class="text-secondary-100 invisible md:visible md:mr-2">
|
</span>
Jakarta, Indonesia
</p> <p class="text-secondary-100 text-base"> <span class="text-secondary-100 invisible md:visible md:mr-2">
|
</span>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p> </section> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/laragon/www/dev/port/src/pages/experience.astro", void 0);

const $$file = "C:/laragon/www/dev/port/src/pages/experience.astro";
const $$url = "/experience";

const experience = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Experience,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, $$Footer as a, experience as e };
