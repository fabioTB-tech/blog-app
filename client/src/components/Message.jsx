function Message({ message }) {
  return (
    <>
      {message && (
        <div className="absolute top-3 left-3 w-2xs p-5 text-center text-2xs font-semibold border-green-400 rounded-md border-2 bg-green-200 text-green-900">
          <p>{message}</p>
        </div>
      )}
    </>
  );
}

export default Message;
