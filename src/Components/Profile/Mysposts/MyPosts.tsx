import React from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../redux/stateType";

export type MyPostsPT = {
    postsData: PostType[]
}

export const MyPosts: React.FC<MyPostsPT> = ({postsData}) => {

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

