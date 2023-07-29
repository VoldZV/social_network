import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <>
            <div>
                Add your Post
                <textarea name="addPost" id="area" cols={50} rows={5}></textarea>
                <button>Add Post</button>
            </div>
            <Post message={'First post message'} likesCount={7}/>
            <Post message={'Second post message'} likesCount={1}/>
            <Post message={'Third post message'} likesCount={3}/>
        </>
    );
};

