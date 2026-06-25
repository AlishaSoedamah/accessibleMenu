import Menu from "./Menu";


export default function Home() {
  return (
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Menu />
          <article>
            <section>
              <h1 className="text-7xl">Toegankelijkheidsmenu</h1>
              <p>
                dit is een test pagina voor het toegankelijkheids menu stuff more stuff....
              </p>
            </section>
            <section>
              <h1 className="text-7xl">interactieve sections</h1>
              {/* prob put this in its own form page */}
              <button>knop</button>
              {/* <form action="">
                <label for="">
                  <input type="radio">
                </label>
                <label for="">
                  <input type="radio">
                </label>
                <label for="">
                  <input type="checkbox">
                </label>
                <label for="">
                  <input type="checkbox">
                </label>
                <label for="">
                  <input type="range">
                </label>
                <label for="">
                  <input type="text">
                </label>
              </form> */}
            </section>
          </article>
      </main>
  );
}
