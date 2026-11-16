import { useState, useEffect } from "react";

import { DiTerminal } from "react-icons/di";

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
      <main className="min-h-dvh p-56 grid grid-cols-2 justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">Ahriri's blog</h1>
          <p>Art, programming and Linux!</p>
        </div>
        <div className="flex justify-center">
          <div className="w-114 h-125 shadow-lg">
            <div className="bg-gray-800 w-full h-full rounded-md overflow-hidden ">
              <div className="bg-gray-300 h-8 p-2.5 flex items-center justify-between">
                <div className="text-lg">
                  <DiTerminal />
                </div>
                <div className="flex gap-1 font-bold">
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                </div>
              </div>
              <div className="p-5 text-white font-mono cursor-alias">
                <p>
                  <span className="text-green-300">[ahriri:~]$</span>{" "}
                  <span className="text-yellow-300">echo</span> "Hello, World!"
                </p>
                <p>Hello World!</p>
                <p>
                  <span className="text-green-300">[ahriri:~]$</span> {cursor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
