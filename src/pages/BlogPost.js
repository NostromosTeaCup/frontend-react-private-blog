import React from 'react';
import posts from '../data/posts.json';
import { useParams, Link } from 'react-router-dom';

function BlogPost() {
    const {blogId} = useParams();

    const selectedPost = posts.find((post) => {
        return post.id === blogId;
    });

    return (
        <div>
            <article>
                <h1>{selectedPost.title}</h1>
                <h3>{selectedPost.date}</h3>
                <p>{selectedPost.content}</p>
            </article>
            <Link to={"/blogposts"}>Terug naar alle posts</Link>
        </div>
    );
}

export default BlogPost;