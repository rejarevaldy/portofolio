/* empty css                         */

function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>/home/revv/</title>
    <link rel="stylesheet" href="../styles/main.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="bg-primary-100 font-primary">
    <header>
      <nav class="relative container mx-auto px-10 py-6">
        <div class="flex items-center justify-between">
          <div class="pt-2">
            <h1
              class="text-secondary-300 font-bold hover:text-accent duration-200 ease-in-out transition-all"
            >
              <a href="./index.html"
                >/home/revv/<span class="animate-blink">_</span></a
              >
            </h1>
          </div>
          <div class="hidden md:flex space-x-6 text-secondary-200 items-center">
            <a href="./blog.html" class="hover:text-accent duration-200 ease-in-out transition-all">Blog</a>
            <a href="./projects.html" class="hover:text-accent duration-200 ease-in-out transition-all">Project</a>
            <a href="./experience.html" class="hover:text-accent duration-200 ease-in-out transition-all">Experience</a>
            <span class="text-secondary-100"> | </span>
            <a href="#" class="flex items-center h-full hover:text-accent duration-200 ease-in-out transition-all">
            </h1>
              <i class="i-lucide-github w-4.5 h-4.5"></i>
            </a>
            <a href="#" class="flex items-center h-full hover:text-accent duration-200 ease-in-out transition-all">
            </h1>
              <i class="i-lucide-linkedin w-4.5 h-4.5"></i>
            </a>
            <a href="#" class="flex items-center h-full hover:text-accent duration-200 ease-in-out transition-all">
            </h1>
              <i class="i-lucide-mail w-4.5 h-4.5"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="container flex px-4 mx-auto my-24 h-full max-w-5xl">
        <div class="w-full">
          <h1 class="text-secondary-300 text-2xl font-bold text-start mb-8">
            <span class="text-accent font-bold mr-1"> | </span>
            Blog
          </h1>
          <div class="flex flex-cols w-full">
            <div class="grid grid-cols-1 gap-7 w-full">
              <div class="flex justify-between p-2">
                <div>
                  <a
                    href=""
                    class="text-secondary-300 hover:text-accent duration-200 ease-in-out transition-all text-xl"
                    >Lorem ipsum dolor sit am Ad, ducimus?</a
                  >
                </div>
                <div class="ml-5">
                  <p class="text-secondary-100">2021, February 23</p>
                </div>
              </div>
              <div class="flex justify-between p-2">
                <div>
                  <a
                    href=""
                    class="text-secondary-300 hover:text-accent duration-200 ease-in-out transition-all text-xl"
                    >Lorem ipsum dolor sit amet consectetur
                  </a>
                </div>
                <div class="ml-5">
                  <p class="text-secondary-100">2021, February 23</p>
                </div>
              </div>
              <div class="flex justify-between p-2">
                <div>
                  <a
                    href=""
                    class="text-secondary-300 hover:text-accent duration-200 ease-in-out transition-all text-xl"
                    >Lorem ipsum do Ad, ducimus?</a
                  >
                </div>
                <div class="ml-5">
                  <p class="text-secondary-100">2021, February 23</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="container mx-auto px-7 py-6 text-secondary-100">
        <p class="text-center">&copy; 2021 Revv. All rights reserved.</p>
      </div>
    </footer>
  </body>
</html>
`
	}
render["astro:html"] = true;

export { render as default };
