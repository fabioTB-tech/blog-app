// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Blogs() {
  const [search, setSearch] = useState("");
  const [warning, setWarning] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setWarning(true);
  };

  useEffect(() => {
    if (search.length === 0) setWarning(false);
    if (search.length > 0) setWarning(true);
  }, [search]);

  return (
    <main className="bg-white flex flex-col items-center mt-16">
      <div className="w-7xl">
        <header className="bg-gray-100 p-44 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl">Posts</h1>
            <p className="text-2xl">
              Find specific posts by searching for them :)
            </p>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              onChange={handleSearch}
              value={search}
              placeholder="post title"
              className="bg-white p-5 w-full rounded-3xl"
            />
            {warning && (
              <>
                <p>Searching is not available yet.</p>
              </>
            )}
          </div>
        </header>
      </div>
    </main>
  );
}

export default Blogs;
