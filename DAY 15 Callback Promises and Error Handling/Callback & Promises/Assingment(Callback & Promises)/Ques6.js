/**
 * Q6. Create a function fetchUserDataAndPosts that takes a user ID and fetches the user details and their posts
using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are
fetched. Return an object with user details and posts.

API to be used
For user:https://jsonplaceholder.typicode.com/users/${userId}
For post:https://jsonplaceholder.typicode.com/posts?userId=${userId}
 */
// solution:-
function fetchUserDataAndPosts(userId){
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((userData) => {
        return fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        )
        .then((response) => response.json())
        .then((posts) => ({user: userData, posts}))
    })
}
fetchUserDataAndPosts(1).then((result) => {
    console.log(result)
})