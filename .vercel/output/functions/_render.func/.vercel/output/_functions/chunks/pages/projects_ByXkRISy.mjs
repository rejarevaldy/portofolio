/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_BTic5Fvv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$Footer } from './experience_BbXvkrQV.mjs';

const $$Astro = createAstro();
const projects = [
  {
    href: "https://github.com/rejarevaldy/4chan-clone",
    title: "4chan Clone",
    body: "A 4chan clone built with Flask and SQLite. "
  }
];
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "/home/revv/projects" })} ${maybeRenderHead()}<main> <div class="container flex px-4 mx-auto my-24 h-full max-w-5xl"> <div class="w-full"> <h1 class="text-secondary-300 text-2xl font-bold text-start mb-8"> <span class="text-accent font-bold mr-1"> | </span>
Project
</h1> <div class="flex flex-cols w-full"> <div class="grid md:grid-cols-2 grid-cols-1 gap-7 w-full"> ${projects.map((project) => renderTemplate`<div class="p-3 border border-primary-200 rounded-lg shadow-lg hover:bg-primary-200 hover:bg-opacity-15 hover:border-b-4 hover:border-b-accent duration-200 ease-in-out transition-all grid place-items-center"> ${" "} <a${addAttribute(project.href, "href")} target="_blank"> <div class="px-6 py-5"> <div class="font-bold text-3xl mb-2 text-secondary-300"> ${project.title} </div> <p class="text-base text-secondary-100">${project.body}</p> </div> </a> </div>`)} </div> </div> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "C:/laragon/www/dev/port/src/pages/projects.astro", void 0);

const $$file = "C:/laragon/www/dev/port/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, projects, $$url as url };
