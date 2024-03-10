import { Hono } from 'hono'
import { Layout } from '../components/layout'
import { Card } from '../components/card'

export const Home = new Hono()

Home.get('/', (c) => {
  return c.html(
    <Layout
      title="JioSaavn API"
      description="JioSaavn API is an unofficial wrapper written in TypeScript for jiosaavn.com providing programmatic access to a vast library of songs, albums, artists, playlists, and more."
    >
      <body class="bg-black mx-auto min-h-screen max-w-screen-lg flex flex-col">
        <main class="flex flex-1 flex-col overflow-auto mt-8 mb-8">
          <div class="mx-auto my-auto container flex flex-col px-4 sm:px-8">
            <div class="relative mb-6 sm:mb-8 flex flex-row items-center space-x-4 px-4 sm:px-8 w-full">
              <svg class="sm:h-12 sm:w-12 h-8 w-8 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#ff7d78"
                  d="M3.172 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.172 8.535C4.343 22 6.229 22 10 22h3.376A4.25 4.25 0 0 1 17 16.007V12.25a2.25 2.25 0 0 1 4.5 0a.75.75 0 0 0 .5.707V12c0-4.714 0-7.071-1.172-8.536C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.464"
                  opacity=".5"
                />
                <path
                  fill="#ff7d78"
                  fill-rule="evenodd"
                  d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11-.5a.75.75 0 0 1 .75.75a2.25 2.25 0 0 0 2.25 2.25a.75.75 0 0 1 0 1.5a3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55a.75.75 0 0 1 .75-.75m-.75 8.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-2xl md:text-4xl text-transparent font-bold leading-none bg-clip-text bg-gradient-to-r from-[#ff7d78] to-purple-600">
                JioSaavn API
                <span class="uppercase text-sm ml-3 text-gray-500 font-normal sm:hidden">unoffical</span>
              </p>
              <p class="hidden sm:block text-xs animate-pulse uppercase px-1 sm:px-3 sm:py-2 text-neutral-200 rounded text-center bg-neutral-800 sm:tracking-wide">
                Unofficial
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 relative grid-flow-row">
              <Card
                tag="Get Started"
                title="Explore the Docs"
                description={<span>Check out the documentation to learn how to use the JioSaavn API.</span>}
                link="/docs"
                color="red-500"
              />
              <Card
                tag="Open Source"
                title="Open Source"
                description={<span>Saavn API is open-source. Check out the source code on github.</span>}
                link="https://github.com/sumitkolhe/jiosaavn-api"
                color="green-500"
              />
              <Card
                tag="Contribute"
                title="Get Involved"
                description={
                  <span>
                    Encounter a bug or have a feature suggestion? Report it on GitHub or contribute by submitting a pull
                    request.
                  </span>
                }
                link="https://github.com/sumitkolhe/jiosaavn-api/issues"
                color="violet-500"
              />
              <Card
                tag="Contact"
                title="Sumit Kolhe"
                description={
                  <span>
                    Have a question or need help? Reach out on{' '}
                    <a
                      href="https://github.com/sumitkolhe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-indigo-500"
                    >
                      GitHub
                    </a>
                    ,{' '}
                    <a
                      href="https://twitter.com/thesumitkolhe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-sky-500"
                    >
                      Twitter
                    </a>
                    , or{' '}
                    <a
                      href="https://t.me/sumitkolhe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-pink-500"
                    >
                      Telegram
                    </a>
                    .
                  </span>
                }
                color="blue-500"
              />
            </div>
          </div>
        </main>
      </body>
    </Layout>
  )
})
