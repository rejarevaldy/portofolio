/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BTic5Fvv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$Footer } from './experience_BbXvkrQV.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "/home/revv/index" })} ${maybeRenderHead()}<div class="my-20 flex justify-center py-10 h-70vh"> <div class="w-full h-full h-100vh p-12 max-w-3xl grid gap-6"> <div class="text-secondary-300"> <h1> <span class="text-secondary-300 font-bold text-3xl">REJA REVALDY F
</span>(レジャ)<span></span> <span class="text-secondary-200 font-thin flex items-center h-full text-sm"> <span class="text-accent font-bold mr-2"> | </span> Web Developer 🞄 Cybersecurity</span> </h1> </div> <div class="text-secondary-200 text-justify text-base"> <p>Hello, I'm Reja Revaldy F</p> <p>College student majoring in Informatics Engineering.</p> </div> <div class="text-secondary-200 text-justify text-base"> <p>
Currently focusing on Web Development and Cybersecurity. I am currently
        studying several programming languages, including Python, PHP, and
        JavaScript. Additionally, I am familiar with frameworks such as Laravel
        and Flask, and I am currently working with the LAMP stack.
</p> </div> <div> <p class="text-sm h-6"> <span class="i-lucide-map-pin text-secondary-200 w-4.5 h-4.5 mr-2"></span> <span class="text-secondary-200"> Indonesia, Kalimantan Selatan </span> </p> <p class="text-sm h-6"> <span class="i-lucide-school-2 text-secondary-200 w-4.5 h-4.5 mr-2"></span> <span class="text-secondary-200"> Politeknik Negeri Banjarmasin </span> </p> </div> </div> </div> ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "C:/laragon/www/dev/port/src/pages/index.astro", void 0);

const $$file = "C:/laragon/www/dev/port/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
