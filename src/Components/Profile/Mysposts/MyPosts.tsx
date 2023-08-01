import React, {RefObject} from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../redux/stateType";

export type MyPostsPT = {
    postsData: PostType[]
}

export const MyPosts: React.FC<MyPostsPT> = ({postsData}) => {

    const posts = postsData.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    const textareaRef: RefObject<HTMLTextAreaElement> = React.createRef()

    const onClickHandler = () => {
        alert(textareaRef.current?.value)
    }

    return (
        <>
            <div>
                Add your Post
                <textarea ref={textareaRef} name="addPost" id="area" cols={30} rows={3}></textarea>
                <button onClick={onClickHandler}>Add Post</button>
            </div>
            {posts}
        </>
    );
};

