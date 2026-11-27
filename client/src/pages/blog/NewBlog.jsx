import { useState } from "react";

import axios from "axios";

import Container from "../../components/Container";

function NewBlog({ user }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      author: user,
      title,
      description,
      content,
      image,
    };
    console.log(image);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/blog/post",
        blog,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log(data);
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <Container>
      <h2 className="text-3xl">
        New post! <span className="text-lg">(only for ahriri, get out!!)</span>
      </h2>
      <form encType="multipart/form-data">
        <div className="flex flex-col mb-5">
          <lable htmlFor="title">Title</lable>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="your post's title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="p-1.5 px-3 border rounded-2xl border-blue-200"
          />
        </div>
        <div className="flex mb-5">
          <div className="flex flex-col">
            <lable htmlFor="image">Blog image</lable>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              required
              onChange={(e) => {
                const file = e.target.files?.[0];
                setImage(file);
              }}
              className="p-26 text-center border rounded-2xl resize-none border-blue-200"
            />
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <lable htmlFor="description">Description</lable>
          <textarea
            id="description"
            name="description"
            required
            placeholder="a description for your post in a brief"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="p-1.5 px-3 border rounded-2xl h-26 resize-none border-blue-200"
          />
        </div>
        <div className="flex flex-col mb-5">
          <lable htmlFor="content">Content</lable>
          <textarea
            id="content"
            name="content"
            required
            placeholder="content of your post, write now!"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="p-1.5 px-3 border rounded-2xl h-80 resize-y border-blue-200"
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-blue-400 text-blue-50 p-3 rounded-2xl cursor-pointer hover:bg-blue-500"
        >
          Publicate Blog
        </button>
      </form>
    </Container>
  );
}

export default NewBlog;
