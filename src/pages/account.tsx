export interface IUser {
    name: string | null
    bio: string | null
}

export function AccountPage({ name, bio }: IUser) {
    return (
        <>
            <h1>Profile Github</h1>
            <p>Nome: {name}</p>
            <p>Nome: {bio}</p>
        </>
    )
}