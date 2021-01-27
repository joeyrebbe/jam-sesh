import React, { useState } from 'react'

import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

export default function AddPostForm(props) {

    const [selectedFile, setSelectedFile] = useState('')
    const [state, setState] = useState({
        caption: '',
        description: ''
    })

    function handleFileInput(e){
        setSelectedFile(e.target.files[0])
    }

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    const formData = new FormData()
    formData.append('caption', state.caption)
    formData.append('description', state.description)
    props.handleAddPost(formData)

    return (
<Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="title"
                  value={state.caption}
                  placeholder="Title"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                  className="form-control"
                  name="description"
                  value={state.description}
                  placeholder="What kind of jam are you looking for?"
                  onChange={handleChange}
                  required
              /> 
              <Button
                type="submit"
                className="btn"
              >
                Submit Your Jam Request
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>    
    )
}