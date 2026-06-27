"use client";

import Menu from "./Menu";
import Layout from "./Layout";
import Form from "./Form";
import { useState } from "react";
import { content as full } from "@/public/data";
import { content as summary } from "@/public/compact";

export default function Home() {
  const [showFull, setShowFull] = useState(true);
  const data = showFull ? full : summary;

  const handleReset = () => {
    setShowFull(true);
  };

  return (
    <Layout>
        <main className="p-10 bg-white dark:bg-black sm:items-start">
          <Menu showFull={showFull} setShowFull={setShowFull} onReset={handleReset}/>
          <article>
              <section>
                <h1 className="py-8 lg:text-7xl md:text-5xl text-3xl">{data.title}</h1>
                <p>{data.body}</p>
                <h1 className="py-8 lg:text-4xl md:text-3xl text-2xl">{data.title_two}</h1>
                <p>{data.body_two}</p>
                <img className="h-96 w-48 object-contain" src="/accessibleMenu/images/blindenstok.jpg" alt="blindenstok die licht geeft in het donker" />
              </section>
              <section>
                <h1 className="py-8 lg:text-7xl md:text-5xl text-3xl">Interactieve elementen</h1>
                <Form />
              </section>
          </article>
        </main>
    </Layout>
  );
}