import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
    const posts = useLoaderData();
    return (
        <div className="w-4/5 m-auto grid grid-cols-3 mt-8">
            {posts.slice(0, 10).map((post) => (
                <div
                    key={post.id}
                    className="card border-2 card-compact w-96 bg-base-100 shadow-xl mb-7 border-red-50"
                >
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.body}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;
