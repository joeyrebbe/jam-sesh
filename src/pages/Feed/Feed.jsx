import React from 'react'
import PageHeader from '../../components/Header/Header'
import AddPost from '../../components/AddPostForm/AddPostForm'
import PostCard from '../../components/PostCard/PostCard'
import * as commentsAPI from '../../utils/commentsService'

export default function Feed(post, isProfile, user, addComment, deleteComment) {
    
        const [posts, setPosts] = useState([])

        async function handleAddPost (post) {
            

            const data = await postsAPI.create(post)
            console.log(data.post, ' new post', data, ' data variable')
            setPosts(posts => [data.post, ...posts])
        }

        async function addComment(postId) {
            try {
            const data = await commentsAPI.create(postId)
            console.log(data, ' data from addComment')
            getPosts()
        } 
        catch (err) {
            console.log(err)
        }
    }
        async function deleteComment(postId) {
           try {
            const data = await commentsAPI.deleteComment(postId)
            getPosts()
           }
           catch (err) {
            console.log(err)
           }
    }


    
    
    
    return (
        <>
        <PageHeader />
        <AddPost />
        <PostCard />
        <PostFeed posts={posts} isProfile={false} user={user} addComment={addComment} removeComment={removeComment} />
        </>
    )
}