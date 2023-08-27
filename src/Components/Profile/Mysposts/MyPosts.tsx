import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../redux/stateType";
import {DispatchActionType} from "../../redux/store";
import {addPostAC, changeTextariaValueAC} from "../../redux/reducers/ProfileReducer";

export type MyPostsPT = {
    postsData: PostType[]
    textariaPostValue: string
    dispatch: (action: DispatchActionType) => void
}

export const MyPosts: React.FC<MyPostsPT> = ({postsData, textariaPostValue, dispatch}) => {
    const posts = postsData.map(post => <Post key={post.id + post.message} message={post.message}
                                              likesCount={post.likesCount}/>)

    // const textareaRef: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPostHandler = () => {
        if (textariaPostValue) dispatch(addPostAC())
    }

    const onChangeTextariaValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const postValue = e.currentTarget.value
        dispatch(changeTextariaValueAC(postValue))
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter" && e.ctrlKey) addPostHandler()
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

