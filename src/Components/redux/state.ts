import {StateType} from "./stateType";

// State of Application
export const state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'First post message', likesCount: 7},
            {id: 2, message: 'Second post message', likesCount: 1},
            {id: 3, message: 'Third post message', likesCount: 3},
        ]
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
    }
}