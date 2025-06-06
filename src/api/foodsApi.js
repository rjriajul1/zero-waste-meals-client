export const promiseFoodUserEmailBase = (email) => {
return fetch(`${import.meta.env.VITE_URL}foodsByEmail?email=${email}`)
.then(res=> res.json())
}