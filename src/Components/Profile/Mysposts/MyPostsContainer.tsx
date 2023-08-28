import React from "react";
import {ProfilePageType} from "../../redux/stateType";
import {addPostAC, changeTextariaValueAC} from "../../redux/reducers/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {Tstore} from "../../redux/redux-store";

export type MyPostsContainerPT = {
    store: Tstore
}
export const MyPostsContainer: React.FC<MyPostsContainerPT> = ({store, store: {dispatch}}) => {
    const state: ProfilePageType = store.getState().profilePage

    // const textareaRef: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        if (state.textariaPostValue) dispatch(addPostAC())
    }

    const changeTextAriaValue = (postValue: string) => {
        dispatch(changeTextariaValueAC(postValue))
    }

    return (
        <MyPosts postsData={state.postsData}
                 textariaPostValue={state.textariaPostValue}
                 addPost={addPost}
                 changeTextAriaValue={changeTextAriaValue}
        />
    );
};