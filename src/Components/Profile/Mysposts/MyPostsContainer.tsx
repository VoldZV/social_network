import React from "react";
import {addPostAC, changeTextariaValueAC} from "../../redux/reducers/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../redux/context/context";


export const MyPostsContainer = () => {

    // const textareaRef: RefObject<HTMLTextAreaElement> = React.createRef()
    return (
        <StoreContext.Consumer>
            {
                (store => {
                    const state = store.getState()
                    const textariaPostValue = state.profilePage.textariaPostValue
                    const postsData = state.profilePage.postsData

                    const addPost = () => {
                        if (textariaPostValue) store.dispatch(addPostAC())
                    }
                    const changeTextAriaValue = (postValue: string) => {
                        store.dispatch(changeTextariaValueAC(postValue))
                    }

                    return (<MyPosts postsData={postsData}
                                     textariaPostValue={textariaPostValue}
                                     addPost={addPost}
                                     changeTextAriaValue={changeTextAriaValue}
                    />)
                })
            }
        </StoreContext.Consumer>
    );
};