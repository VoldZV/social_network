//State type
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
    navbarPage: NavbarPageType
    // reRenderEntireTree: () => void
    // subscriber: (observer: () => void) => void
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
    textariaPostValue: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

// Navbar Page Type

export type NavbarPageType = {
    friends: FriendsType[]
}

export type FriendsType = {
    id: number
    name: string
}

