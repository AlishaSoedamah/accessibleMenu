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
        <main className="p-10 flex flex-1 w-full max-w-3xl flex-col items-center bg-white dark:bg-black sm:items-start">
          <Menu showFull={showFull} setShowFull={setShowFull} onReset={handleReset}/>
            <div>
            </div>
            <article>
              <section>
                <h1 className="py-8 lg:text-7xl md:text-4xl">{data.title}</h1>
                <p>{data.body}</p>
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