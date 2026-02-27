import { useState, useEffect } from 'react'

export function useFetch(url: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                
                if(!response.ok) {
                    throw new Error(`Erro ao buscar dados: ${response.statusText}`);
                }

                const data = await response.json();

                setData(data);

            } catch (err) {
                setError(err instanceof Error ? err.message : String(err))
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [url])


    return { data, loading, error }

}