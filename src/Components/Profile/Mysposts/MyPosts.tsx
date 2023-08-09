import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../redux/stateType";

export type MyPostsPT = {
    postsData: PostType[]
    addPost: (postValue: string) => void
    changeTextariaValue: (newPostValue: string) => void
    textariaPostValue: string
}

export const MyPosts: React.FC<MyPostsPT> = ({postsData, addPost, textariaPostValue, changeTextariaValue}) => {
    const posts = postsData.map(post => <Post key={post.id + post.message} message={post.message}
                                              likesCount={post.likesCount}/>)

    // const textareaRef: RefObject<HTMLTextAreaElement> = React.createRef()

    const onClickHandler = () => {
        if (textariaPostValue) addPost(textariaPostValue)
    }

    const onChangeTextariaValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const postValue = e.currentTarget.value
        changeTextariaValue(postValue)
    }

    return (
        <>
            <div>
                Add your Post
                <textarea
                    // ref={textareaRef}
                    value={textariaPostValue}
                    onChange={onChangeTextariaValue}
                    name="addPost"
                    id="area"
                    cols={30}
                    rows={3}
                >
                </textarea>
                <button onClick={onClickHandler}>Add Post</button>
            </div>
            {posts}
        </>
    );
};

