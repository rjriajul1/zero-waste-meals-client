export const promiseFoodUserEmailBase = (email,accessToken) => {
return fetch(`${import.meta.env.VITE_URL}foodsByEmail?email=${email}`,{
    headers: {
        authorization: `Bearer ${accessToken}`
    }
})
.then(res=> res.json())
}