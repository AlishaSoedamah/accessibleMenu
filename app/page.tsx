import Menu from "./Menu";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Menu />
            <article>
              <section>
                <h1 className="text-7xl">Toegankelijkheidsmenu</h1>
                <p>
                  dit is een test pagina voor het toegankelijkheids menu stuff more stuff....
                  test pagina hiii
                </p>
              </section>
              <section>
                <h1 className="text-7xl">interactieve sections</h1>
              </section>
            </article>
        </main>
    </Layout>
  );
}
