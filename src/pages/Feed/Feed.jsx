import React, { useState } from 'react'
import PageHeader from '../../components/Header'
import AddPost from '../../components/AddPostForm'
import PostCard from '../../components/PostCard'
import * as commentsAPI from '../../utils/commentsService'
import * as postsAPI from '../../utils/post-api'

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
            // getPosts()
        } 
        catch (err) {
            console.log(err)
        }
    }
        async function deleteComment(postId) {
           try {
            const data = await commentsAPI.deleteComment(postId)
            // getPosts()
           }
           catch (err) {
            console.log(err)
           }
    }


    
    
    
    return (
        <>
        <PageHeader />
        <AddPost handleAddPost={handleAddPost} />
        <PostCard />
        {/* <PostFeed posts={posts} isProfile={false} user={user} addComment={addComment} removeComment={removeComment} /> */}
        </>
    )
}