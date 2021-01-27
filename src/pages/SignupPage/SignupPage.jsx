import React, {useState, useRef} from 'react'
import './SignupPage.css'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService'
import { useHistory } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Segment, Ref } from 'semantic-ui-react'



export default function SignUpPage(props) {

    const [invalidForm, setValidForm] = useState(false)
    const [selectedFiled, setSelectedFile] = useState('')
    const [error, setError]         = useState('')
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: '',
        bio: ''
})

    const formRef = useRef()
    const history = useHistory()

    const handleFileInput = (e) => {
        console.log(e.target.files)
        setSelectedFile(e.target.files[0])
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('photo', selectedFile)

        for(let fieldName in state) {
            formData.append(fieldName, state[fieldName])
        }

        try {
            await userService.signup(formData)
            props.handleSignupOrLogin()
            history.push('/')
        }
        catch (err) {
            console.log(err.message)
            setError(err.message)
        }
    }



return (
    <>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://i.imgur.com/s4LrnlU.png' /> Sign Up    
          </Header>            
            <Form autoComplete="off"  onSubmit={handleSubmit}>
            <Segment stacked>               
                <Form.Input                    
                  name="username"
                  placeholder="username"
                  value={state.username}
                  onChange={handleChange}
                  required
                />
                <Form.Input
                  type="email"                  
                  name="email"
                  placeholder="email"
                  value={ state.email}
                  onChange={handleChange}
                  required
                />
                <Form.Input             
                  name="password"
                  type="password"
                  placeholder="password"
                  value={ state.password}
                  onChange={handleChange}
                  required
                />
                <Form.Input     
                  name="passwordConf"
                  type="password"
                  placeholder="Confirm Password"
                  value={ state.passwordConf}
                  onChange={handleChange}
                  required
                />
                <Form.TextArea label='bio' placeholder='Tell us more about your dogs...' onChange={handleChange}/>
                <Form.Field> 
                    <Form.Input
                      type="file"
                      name="photo"
                      placeholder="upload image"
                      onChange={handleFileInput}
                    />      
                </Form.Field>
                <Button
                  type="submit"
                  className="btn"
                  disabled={invalidForm}
                >
                Signup
              </Button>
              </Segment>
              {error ? <ErrorMessage error={error} /> : null}
            </Form>
           
        </Grid.Column>
      </Grid>
    </>
  );
}