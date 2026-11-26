import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/min/moment-with-locales";

import Moment, { MomentProvider } from 'react-moment';
import Window from "../../components/Window";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [catImg, setCatImg] = useState("");

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/blog/getposts");
      const catImgRes = await axios.get("https://cataas.com/cat");

      setCatImg(catImgRes.data.url)
      setPosts(data.posts)
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
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold">{ post.title }</h2>
                      <MomentProvider
                        moment={moment}
                        locale={"pt-br"}
                        local
                        format="D MMMM YYYY"
                      >
                        <Moment className="text-sm text-gray-500">{ post.createdAt }</Moment>
                      </MomentProvider>
                    </div>
                    <div className="px-2">
                      <p className="text-sm">{ post.description }</p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        className="p-1 px-5 bg-button border-2 border-button-border text-white hover:bg-button-hover mb-3 mr-3 rounded-md"
                      >
                        ler mais
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Window>
          </div>
          <div className="w-1/3">
            <div className="w-full h-44 p-2">
              <div className="w-full h-full p-2 border-2 border-dotted border-window-border rounded-lg">
                <img src={catImg} alt="Foto de gato" className="w-full h-full object-cover rounded-md shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
