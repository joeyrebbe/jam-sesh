import React from 'react'
import { Card, Icon, Image, Feed } from 'semantic-ui-react'

function PostCard({post, isProfile, addComment, removeComment, user}) {

    const commented = post.comments.findIndex(comment => comment.username === user.username)
    const clickHandler = commented > -1 ? () => removeComment(post.comments[commented]._id) : () => addComment(post._id)
    
    return (
        <Card key={post._id}>
            {isProfile ? '' 
            : <Card.Content textAlign = 'left'>
                <Card.Header floated="right">{post.user.username}</Card.Header> 
            </Card.Content>
            }
            <Card.Content>
                <Card.Description>
                    {post.caption}
                </Card.Description>
            </Card.Content>
            <Card.Content textAlign="center">
                <Icon name={'comment'} size="small" color={black} onClick={clickHandler} />
                {post.comments.length} Comments
            </Card.Content>
        </Card>
    )
}

export default PostCard
