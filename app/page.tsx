"use client";

import Menu from "./Menu";
import Layout from "./Layout";
import Form from "./Form";

export default function Home() {
  return (
    <Layout>
        <main className="p-10 flex flex-1 w-full max-w-3xl flex-col items-center bg-white dark:bg-black sm:items-start">
          <Menu />
            <article>
              <section>
                <h1 className="py-8 lg:text-7xl md:text-4xl">Menu prototype</h1>
                <p>
                 testy
                </p>
                <div className="box-deco" ></div>
              </section>
              <section>
                <h1 className="py-8 lg:text-7xl md:text-4xl">Interactieve</h1>
                <button className="btn btn-blue">Een knop</button>
                <Form />
              </section>
            </article>
        </main>
    </Layout>
  );
}