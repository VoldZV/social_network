import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    const postsData = [
        {id: 1, message: 'First post message', likesCount: 7},
        {id: 2, message: 'Second post message', likesCount: 1},
        {id: 3, message: 'Third post message', likesCount: 3},
    ]
    const posts = postsData.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    return (
        <>
            <div>
                Add your Post
                <textarea name="addPost" id="area" cols={50} rows={5}></textarea>
                <button>Add Post</button>
            </div>
            {posts}
        </>
    );
};

