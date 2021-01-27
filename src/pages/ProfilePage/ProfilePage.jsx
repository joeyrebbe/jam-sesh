import React, { useState, useEffect } from 'react'
import {Grid} from 'semantic-ui-react'
import ProfileBio from '../../components/ProfileBio/ProfileBio'
import ProfilePostDisplay from '../../components/ProfilePostDisplay/ProfilePostDisplay'
import PageHeader from '../../components/Header/Header'
import userService from '../../utils/userService'
import { useLocation } from 'react-router-dom'

export default function ProfilePage() {

    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const location = useLocation()

    async function getProfile() {
        try {
            
            const username = location.pathname.substring(1)
            console.log(username, 'username in path')
            const data = await userService.getProfile(username)
            console.log(data, 'data retrieved by getProfile function')
            setLoading(() => false)
            setPosts(() => [...data.posts])
            setUser(() => setUser(data.user))
        }
        catch (err) {
            console.log(err)
            setError(err)
        }
    }

    async function addComment(postId){
        try {
          const data = await commentsAPI.create(postId);
          console.log(data, ' this is from addcomment')
          getProfile()
        } catch(err){
          console.log(err)
        }
      }
    
      async function removeComment(postId){
        try {
          const data = await commentsAPI.removeComment(postId);
          getProfile();
        } catch(err){
          console.log(err)
        }
      }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <>
        { loading ? 
            <h1>Loading Page ...</h1>
            :
            <Grid>
                <PostFeed isProfile={true} posts={posts} user={user} addComment={addComment} removeComment={removeComment}/>
                <Grid.Row>
                    <Grid.Column>
                        <PageHeader />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <ProfileBio user={user} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column style={{ maxWidth: 750 }}>
                        <ProfilePostDisplay />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        }
        </>
    )
}