import { useState, useEffect } from "react";

function Home() {
  const [cursor, setCursor] = useState("|");

  useEffect(() => {
    setTimeout(() => {
      if (cursor === "") setCursor("|");
      if (cursor === "|") setCursor("");
    }, 750);
  }, [cursor]);

  return (
    <>
      <section className=" p-56 flex flex-col justify-center items-center gap-16">
        <div className="bg-white w-3/4 p-5 rounded-lg border-red-300 border-2">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-itim mb-4">Blog da Ahri</h1>
            <p className="font-poppins">Assuntos variados.</p>
            <p className="font-poppins">Combinando criatividade com programação</p>
          </div>
          <div className="flex justify-center">

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
