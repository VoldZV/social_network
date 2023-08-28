import React from "react";
import {ProfilePageType} from "../../redux/stateType";
import {addPostAC, changeTextariaValueAC} from "../../redux/reducers/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {Tstore} from "../../redux/redux-store";
import {StoreContext} from "../../redux/context/context";

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
        <StoreContext.Consumer>
            {
                (store => (
                    <MyPosts postsData={store.getState().profilePage.postsData}
                             textariaPostValue={state.textariaPostValue}
                             addPost={addPost}
                             changeTextAriaValue={changeTextAriaValue}
                    />
                ))
            }
        </StoreContext.Consumer>
    );
};