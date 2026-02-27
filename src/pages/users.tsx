import { AccountPage } from './account';
import { useEffect, useState } from 'react';

export function Users() {
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const getProfile = async () => {
           try {
                const response = await fetch('https://api.github.com/users/Wiliami')

                if(!response.ok) {
                    throw new Error(`Erro ao busca dados: ${response.statusText}`)
                }

                const profile = await response.json()

                setProfile(profile)
           } catch (err) {
                setError(err instanceof Error ? err.message : String(err))
           } finally {
                setLoading(false)
           }
        }

        getProfile()
    }, [profile])

    if(loading) return 'Loading...'
    if(error) return `Erro ao buscar dados ${error}`

    return <AccountPage name={profile?.name} bio={profile?.bio} />

}
