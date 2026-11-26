function Container({ children }) {
  return (
    <article className="h-full flex flex-col justify-center items-center gap-16">
      <div className="bg-white w-2/4 p-5 rounded-lg border-container-border border-2">
        {children}
      </div>
    </article>
  );
}

export default Container;
