import React from 'react'

export const useHttp = () => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null)

    const request:any = React.useCallback(async (url: string, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
           const response =  await fetch(url, {method, body, headers})
           const data = await response.json()
           if (!response.ok) {
               throw new Error(data.message || 'Somehting goes wrong')
           }
           setLoading(false)
           return data
        } catch (error) {
            setLoading(false)
            setError(error.message)
            throw error
        }
    }, [])

    const clearError = () => setError(null)

    return { loading, request, error, clearError} 
}