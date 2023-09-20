//State type
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
    navbarPage: NavbarPageType
    // reRenderEntireTree: () => void
    // subscriber: (observer: () => void) => void
}

// Users Page Type
export type UsersPageType = {
    users : UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
    error: null | string
    isLoading: boolean
}

export type UserType = {
    name: string
    id: number
    photos: {
        small: null | string
        large: null | string
    },
    status: null | string
    followed: boolean
}

// Dialogs Page type
export type DialogsPageType = {
    dialogsUsersData: DialogsItemType[]
    messageItemsData: MessageItemType[]
    addFormValue: string
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
