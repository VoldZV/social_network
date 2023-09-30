import React from "react";
import {addPost, changeTextariaValue} from "../../redux/reducers/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {PostType} from "../../redux/stateType";
import {AppStateType, AppActionTypes} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type TmstpMyPosts = {
    postsData: PostType[]
    textariaPostValue: string
}

const mstpMyPosts = (state: AppStateType): TmstpMyPosts => ({
    postsData: state.profilePage.postsData,
    textariaPostValue: state.profilePage.textariaPostValue
})

type TmdtpMyPosts = {
    addPost: () => void
    changeTextAriaValue: (postValue: string) => void
}

const mdtpMyPosts = (dispatch: Dispatch<AppActionTypes>): TmdtpMyPosts => ({
    addPost: () => {
        dispatch(addPost())
    },
    changeTextAriaValue: (postValue: string) => {
        dispatch(changeTextariaValue(postValue))
    }
})

export type TmyPosts = TmstpMyPosts & TmdtpMyPosts

export const MyPostsContainer = connect(mstpMyPosts, mdtpMyPosts)(MyPosts)

// Old container with React.createContext
// export const MyPostsContainer = () => {
//
//     // const textareaRef: RefObject<HTMLTextAreaElement> = React.createRef()
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store => {
//                     const state = store.getState()
//                     const textariaPostValue = state.profilePage.textariaPostValue
//                     const postsData = state.profilePage.postsData
//
//                     const addPost = () => {
//                         if (textariaPostValue) store.dispatch(addPostAC())
//                     }
//                     const changeTextAriaValue = (postValue: string) => {
//                         store.dispatch(changeTextariaValueAC(postValue))
//                     }
//
//                     return (<MyPosts postsData={postsData}
//                                      textariaPostValue={textariaPostValue}
//                                      addPost={addPost}
//                                      changeTextAriaValue={changeTextAriaValue}
//                     />)
//                 })
//             }
//         </StoreContext.Consumer>
//     );
// };


