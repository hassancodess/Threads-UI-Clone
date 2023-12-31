export interface Thread {
    id: string,
    author: User,
    content: string,
    image?: string,
    replies: Reply[],
    likesCount: number,
    repliesCount: number,
    mention?: boolean,
    mentionUser?: User,
    createdAt: string ,

}

export interface Reply {
    id: string,
    author: User,
    content: string,
    likes: number,
    createdAt: string,

}

export interface User {
     id: string,
     name: string,
     username: string,
     verified: boolean,
     photo : string,
     bio: string,
     link?: string,
     followers?: User[]
}