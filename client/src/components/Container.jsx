function Container({ children }) {
  return (
    <main className="min-h-dvh bg-blue-50 grid grid-cols-[15%_1fr_15%] grid-rows-[64px] gap-3">
      <article className="row-start-2 col-start-2 bg-white p-5 rounded-2xl shadow">
        {children}
      </article>
    </main>
  );
}

export default Container;
