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
        <main className="p-10 bg-white dark:bg-black">
          <Menu showFull={showFull} setShowFull={setShowFull} onReset={handleReset}/>
          <article>
              <article className="lg:px-16 w-full" >
                <mark>Lumicane</mark>
                <section className="lg:flex md:block w-full">
                <div className="lg:w-1/2">
                  <h1 className="py-8 lg:text-7xl md:text-5xl text-3xl">{data.title}</h1>
                  <p>{data.body}</p>
                  <h2 className="py-8 lg:text-4xl md:text-3xl text-2xl">{data.title_two}</h2>
                  <p>{data.body_two}</p>
                </div>
                  <img className="p-10 lg:w-1/2 md:w-1/3 flex-shrink-0 object-cover rounded" src="/accessibleMenu/images/blindenstok.jpg" alt="blindenstok die licht geeft in het donker" />
                </section>
                <section className="from-section lg:flex md:w-full py-20">
                    <Form />
                </section>
              </article>
          </article>
        </main>
    </Layout>
  );
}