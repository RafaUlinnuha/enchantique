import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam maiores id nam sed vitae distinctio aspernatur explicabo debitis, repellat repellendus enim ab quibusdam sunt, consequatur repudiandae nisi eaque commodi ullam.",
      img: "./src/assets/bg-auth.png"
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam maiores id nam sed vitae distinctio aspernatur explicabo debitis, repellat repellendus enim ab quibusdam sunt, consequatur repudiandae nisi eaque commodi ullam.",
      img: "./src/assets/bg-auth.png"
    }
  ];
  return (
    <div className="max-w-screen-md mx-auto py-12">
      {posts.map(post => (
        <div key={post.id} className="grid md:grid-cols-2 gap-8 py-8 md:py-12 px-6 md:px-0">
          <img src={post.img} />
          <Link to={`/post/${post.id}`}>
            <h1 className="font-medium">
              {post.title}
            </h1>
            <p className="mt-2 text-sm">
              {post.desc}
            </p>
            <button type="button" class="mt-4 py-2 px-4 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
              Read More
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home