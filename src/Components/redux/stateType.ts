//State type
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
    navbarPage: {}
}

// Dialogs Page type
export type DialogsPageType = {
    dialogsUsersData: DialogsItemType[]
    messageItemsData: MessageItemType[]
}

export type DialogsItemType = {
    id: number
    name: string
}

export type MessageItemType = {
    id: number
    message: string
}

//Profile Page Type

export type ProfilePageType = {
    postsData: PostType[]
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
