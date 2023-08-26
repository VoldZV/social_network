import {StateType} from "./stateType";

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'First post message', likesCount: 7},
                {id: 2, message: 'Second post message', likesCount: 1},
                {id: 3, message: 'Third post message', likesCount: 3},
            ],
            textariaPostValue: ''
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
            ]
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
    get getState () {
        return this._state
    },
    set setState (newState: StateType) {
        this._state = newState
    },
    dispatch (action: ActionsType) {
        switch (action.type) {
            case "ChangeTextAriaPostValue":
                this.changeTextariaValue(action.newValue)
                break
            case "ADD-POST":
                this.addPost(this._state.profilePage.textariaPostValue)
                break
            default:
                console.log(this._state)
        }
    },
    addPost (postValue: string) {
        this._state = {
            ...this._state,
            profilePage: {
                ...this._state.profilePage,
                postsData: [...this._state.profilePage.postsData, {id: 4, message: postValue, likesCount: 0}],
                textariaPostValue: ""
            }
        }
        this._callSubscriber()
    },
    changeTextariaValue (postValue: string) {
        this._state = {
            ...this._state,
            profilePage: {
                ...this._state.profilePage,
                textariaPostValue: postValue
            }
        }
        this._callSubscriber()
    }
}


type StoreType = {
    _state: StateType
    _callSubscriber  : () => void
    subscriber: (observer: () => void) => void
    getState: StateType
    setState: StateType
    dispatch: (action: ActionsType) => void
    addPost: (postValue: string) => void
    changeTextariaValue: (postValue: string) => void
}

export type ActionsType = ChangeTextAriaPostValueAT | AddPostAT
type ChangeTextAriaPostValueAT = {
    type: "ChangeTextAriaPostValue"
    newValue: string
}
type AddPostAT = {
    type: "ADD-POST"
}