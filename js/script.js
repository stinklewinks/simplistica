import dotenv from 'dotenv'
dotenv.config();
const wpPosts = process.env.WP_POSTS;
const pages = fetch(
    wpPosts
).
then(response => response.json()).
then(data => {
    const posts = data;
    posts.forEach(post => {
        console.log(post.title.rendered)
    });
});