function Error({ error }) {
  return (
    <>
      {error && (
        <div className="absolute top-3 left-3 w-2xs p-5 text-center text-2xs font-semibold border-red-400 rounded-md border-2 bg-red-200 text-red-900">
          <p>{error}</p>
        </div>
      )}
    </>
  );
}

export default Error;
