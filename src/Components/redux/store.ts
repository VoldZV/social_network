import {StateType} from "./stateType";
import {ProfileReducer} from "./reducers/ProfileReducer";
import DialogsReducer from "./reducers/DialogsReducer";
import NavBarReducer from "./reducers/NavBarReducer";
import {AppActionTypes} from "./redux-store";

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'First post message', likesCount: 7},
                {id: 2, message: 'Second post message', likesCount: 1},
                {id: 3, message: 'Third post message', likesCount: 3},
            ],
            user: null,
            textariaPostValue: ""
        },
        dialogsPage: {
            dialogsUsersData: [
                {id: 1, name: 'Galina'},
                {id: 2, name: 'Alexander'},
                {id: 3, name: 'Nataliya'},
                {id: 4, name: 'Danil'},
                {id: 5, name: 'Pavel'},
                {id: 6, name: 'Ilya'},
            ],
            messageItemsData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'What`up man'},
                {id: 3, message: 'Yo'}
            ],
            addFormValue: ""
        },
        navbarPage: {
            friends: [
                {id: 1, name: 'Galina'},
                {id: 2, name: 'Alexander'},
                {id: 3, name: 'Nataliya'},
                {id: 4, name: 'Danil'},
                {id: 5, name: 'Pavel'},
                {id: 6, name: 'Ilya'},
            ]
        },
    },
    _callSubscriber () {

    },
    subscriber (observer) {
        this._callSubscriber = observer
    },
    dispatch (action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._state.navbarPage = NavBarReducer(this._state.navbarPage, action)
        this._callSubscriber()
    },
    // addPost (postValue: string) {
    //     this._state = {
    //         ...this._state,
    //         profilePage: {
    //             ...this._state.profilePage,
    //             postsData: [...this._state.profilePage.postsData, {id: 4, message: postValue, likesCount: 0}],
    //             textariaPostValue: ""
    //         }
    //     }
    //     this._callSubscriber()
    // },
    // changeTextariaValue (postValue: string) {
    //     this._state = {
    //         ...this._state,
    //         profilePage: {
    //             ...this._state.profilePage,
    //             textariaPostValue: postValue
    //         }
    //     }
    //     this._callSubscriber()
    // },
    // addMessage (newMessage: string) {
    //     this._state = {
    //         ...this._state,
    //         dialogsPage: {
    //             ...this._state.dialogsPage,
    //             messageItemsData: [...this._state.dialogsPage.messageItemsData, {id: 4, message: newMessage}],
    //             addFormValue: ""
    //         }
    //     }
    //     this._callSubscriber()
    // },
    // changeMessageAddFormValue (newValue: string) {
    //     this._state = {
    //         ...this._state,
    //         dialogsPage: {
    //             ...this._state.dialogsPage,
    //             addFormValue: newValue
    //         }
    //     }
    //     this._callSubscriber()
    // },
    get getState () {
        return this._state
    },
    set setState (newState: StateType) {
        this._state = newState
    }
}

type StoreType = {
    _state: StateType
    _callSubscriber  : () => void
    subscriber: (observer: () => void) => void
    getState: StateType
    setState: StateType
    dispatch: (action: AppActionTypes) => void
    // addPost: (postValue: string) => void
    // changeTextariaValue: (postValue: string) => void
    // addMessage: (newMessage: string) => void
    // changeMessageAddFormValue: (newValue: string) => void
}

