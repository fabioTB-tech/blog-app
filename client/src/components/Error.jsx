function Error({ error }) {
  return (
    <>
      {error && (
        <div className="absolute top-20 right-3 z-10 w-2xs p-5 text-center text-2xs font-semibold border-red-400 rounded-md border-2 bg-red-200 text-red-900">
          <p>{error}</p>
        </div>
      )}
    </>
  );
}

export default Error;
