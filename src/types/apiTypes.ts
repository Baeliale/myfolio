interface ProjectI {
    id: string,
    img: {
        src: string,
        alt?: string,
    },
    title: string,
    description?: string,
    uploadDate: number,
}

interface UserI {
    id: string,
    username: string,
    password: string,
    email: string,
    name: {
        firstName?: string,
        lastName?: string,
    },
    avatar?: {
        src: string,
        alt?: string,
    },
    socials: {
        website?: string,
        linkedin?: string,
        instagram?: string,
    },
    joinDate: number,
    projects: ProjectI[]
}

type UsersType = Array<UserI>