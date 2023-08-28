import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../redux/stateType";

export type MyPostsPT = {
    postsData: PostType[]
    textariaPostValue: string
    addPost: () => void
    changeTextAriaValue: (postValue: string) => void
}


export const MyPosts: React.FC<MyPostsPT> = ({postsData, textariaPostValue, addPost, changeTextAriaValue}) => {
    const posts = postsData.map(post => <Post key={post.id + post.message} message={post.message}
                                              likesCount={post.likesCount}/>)

    // const textareaRef: RefObject<HTMLTextAreaElement> = React.createRef()

    const onChangeTextariaValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeTextAriaValue(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter" && e.ctrlKey) addPost()
    }

    return (
        <>
            <div>
                Add your Post
                <textarea
                    // ref={textareaRef}
                    value={textariaPostValue}
                    onChange={onChangeTextariaValue}
                    onKeyDown={onKeyDownHandler}
                    name="addPost"
                    id="area"
                    cols={30}
                    rows={3}
                >
                </textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            {posts}
        </>
    );
};

