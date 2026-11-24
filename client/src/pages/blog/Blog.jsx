import { useState, useEffect } from "react";
import axios from "axios";

import Window from "../../components/Window";

function Blog() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const { data } = await axios("http://localhost:5000/api/blog/getposts");

      setPosts(data.posts)
      console.log(data.posts)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <section className="h-full flex flex-col justify-center items-center gap-16">
      <div className="bg-white w-2/4 p-5 rounded-lg border-container-border border-2">
        <div className="w-full flex justify-center mb-6">
          <div></div>
          <div className="font-itim">
            <h1 className="text-4xl">Postagens mais recentes!</h1>
          </div>
          <div></div>
        </div>
        <div className="w-full h-fit flex justify-between">
          <div className="w-full">
            <Window fluid={true}>
              <div className="w-full p-2">
                {posts && posts.map(post => (
                  <div key={post._id} className="w-full flex flex-col border-b border-gray-300">
                    <div className="flex justify-between">
                      <h2 className="text-xl font-semibold">{ post.title }</h2>
                      <p>{ post.createdAt }</p>
                    </div>
                  </div>
                ))}
              </div>
            </Window>
          </div>
          <div className="w-1/3">

          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
