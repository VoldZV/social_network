import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../redux/stateType";
import {ActionsType} from "../../redux/store";

export type MyPostsPT = {
    postsData: PostType[]
    textariaPostValue: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts: React.FC<MyPostsPT> = ({postsData, textariaPostValue, dispatch}) => {
    const posts = postsData.map(post => <Post key={post.id + post.message} message={post.message}
                                              likesCount={post.likesCount}/>)

    // const textareaRef: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPostHandler = () => {
        if (textariaPostValue) dispatch({type: "ADD-POST"})
    }

    const onChangeTextariaValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const postValue = e.currentTarget.value
        dispatch({type: "ChangeTextAriaPostValue", newValue: postValue})
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter") addPostHandler()
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
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            {posts}
        </>
    );
};

