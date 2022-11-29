import type { NextFunction, Request, RequestHandler, Response } from 'express'

export class HomeController {
  public home: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send(`<!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width" />
          <meta charset="utf-8" />
          <title>JioSaavn API</title>
          <meta name="title" content="JioSaavn API" />
          <meta name="description" content="JioSaavn API by Sumit Kolhe" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://saavn.me/" />
          <meta property="og:title" content="JioSaavn API" />
          <meta property="og:description" content="JioSaavn API by Sumit Kolhe" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://saavn.me/" />
          <meta property="twitter:title" content="JioSaavn API by Sumit Kolhe" />
          <meta property="twitter:description" content="JioSaavn API by Sumit Kolhe" />
        </head>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <style>
        .no-select {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
      }
      .no-select:focus {
          outline: none !important;
      }
        </style>
      
        <body class="bg-[#111] no-select">
          <div class="mx-auto min-h-screen max-w-screen-lg flex flex-col">
            <main class="flex flex-1 flex-col overflow-hidden">
              <div class="mx-auto my-auto container flex flex-col p-8 sm:p-8">
                <div class="relative mb-8 w-full">
                  <div class="flex flex-row items-center space-x-4 px-8 w-full">
                    <p
                      class="md:text-4xl text-2xl text-transparent font-bold leading-none -ml-px bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    >
                     JioSaavn API
                    </p>
      
                    <p
                      class="text-xs uppercase px-3 py-2 text-slate-400 rounded text-center max-w-fit bg-zinc-800 tracking-wide"
                    >
                      Unofficial
                    </p>
                  </div>
                </div>
                <div
                  class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 relative grid-flow-row"
                >
                  <div
                    class="h-[400vh] border-r border-white absolute left-0 opacity-10 -top-[100vh] -ml-px"
                  ></div>
                  <div
                    class="h-[400vh] border-r border-white absolute right-0 opacity-10 -top-[100vh]"
                  ></div>
                  <div
                    class="w-[400vw] border-t border-white absolute top-0 opacity-10 -left-[100vw]"
                  ></div>
                  <div
                    class="w-[400vw] border-t border-white absolute bottom-0 opacity-10 -left-[100vw]"
                  ></div>
                  <a
                    target="_blank"
                    class="bg-white bg-opacity-0 border-b border-white border-opacity-5 relative -ml-px p-8 hover:bg-opacity-[3%] duration-100 group sm:col-span-4"
                    href="https://docs.saavn.me"
                  >
                    <div class="flex flex-col">
                      <span
                        class="text-xs uppercase bg-opacity-10 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-red-500 text-red-500"
                      >
                        Docs
                      </span>
                      <span class="text-neutral-200 font-bold text-2xl mt-2">Documentation</span>
                      <p class="text-neutral-500 mt-2">
                        Check out the documentation to learn how to use the saavn API.
                      </p>
                    </div>
                    <div
                      class="h-[200vh] border-r border-white absolute -right-px opacity-[4%] -top-[100vh] hidden sm:flex"
                    ></div>
                  </a>
                  <a
                    target="_blank"
                    class="bg-white bg-opacity-0 border-b border-white border-opacity-5 relative -ml-px p-8 hover:bg-opacity-[3%] duration-100 group sm:col-span-4"
                    href="https://github.com/sumitkolhe/jiosaavn-api"
                  >
                    <div class="flex flex-col">
                      <span
                        class="text-xs uppercase rounded bg-opacity-10 text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-green-500 text-green-500"
                      >
                        Open Source
                      </span>
                      <span class="text-neutral-200 font-bold text-2xl mt-2">Open source</span>
                      <p class="text-neutral-500 mt-2">
                        Saavn API is open-source. Check out the source code at github.
                      </p>
                    </div>
                    <div
                      class="h-[200vh] border-r border-white absolute -right-px opacity-[4%] -top-[100vh] hidden sm:flex"
                    ></div>
                  </a>
                  <a
                    target="_blank"
                    class="bg-white bg-opacity-0 border-b border-white border-opacity-5 relative -ml-px p-8 hover:bg-opacity-[3%] duration-100 group sm:col-span-4"
                    href="https://github.com/sumitkolhe/jiosaavn-api/issues"
                  >
                    <div class="flex flex-col">
                      <span
                        class="text-xs uppercase rounded bg-opacity-10 text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-violet-500 text-violet-500"
                      >
                        Collaborate
                      </span>
                      <span class="text-neutral-200 font-bold text-2xl mt-2">Features / Bugs</span>
                      <p class="text-neutral-500 mt-2">
                        Found a bug? Please report it. If you'd like to contribute, feel free to raise a
                        PR.
                      </p>
                    </div>
                    <div
                      class="h-[200vh] border-white absolute -right-px opacity-[4%] -top-[100vh] hidden sm:flex"
                    ></div>
                  </a>
                  <a
                  target="_blank"
                  class="bg-white bg-opacity-0 border-b border-white border-opacity-5 relative -ml-px p-8 hover:bg-opacity-[3%] duration-100 group sm:col-span-4"
                  href="https://github.com/sumitkolhe"
                >
                  <div class="flex flex-col">
                    <span
                      class="text-xs uppercase rounded bg-opacity-10 text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-blue-500 text-blue-500"
                    >
                      Author
                    </span>
                    <span class="text-neutral-200 font-bold text-2xl mt-2">Sumit Kolhe</span>
                    <p class="text-neutral-500 mt-2">
                    Saavn unofficial API is created by Sumit Kolhe. Check out other projects at
                      github.
                    </p>
                  </div>
                  <div
                    class="h-[200vh] border-white absolute -right-px opacity-[4%] -top-[100vh] hidden sm:flex"
                  ></div>
                </a>
                </div>
              </div>
            </main>
          </div>
        </body>
      </html>`)
    } catch (error) {
      next(error)
    }
  }
}
