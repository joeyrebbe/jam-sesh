import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UploadPost } from '../services/PostServices'

export default class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      location: '',
      description: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __UploadPost(this.state, this.props.currentUser._id)
      this.props.history.push('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { title, location, description } = this.state
    return (
      <div className="upload content">
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Title"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="Location"
            name="location"
            value={location}
            onChange={this.handleChange}
          />
          <TextInput
            fieldType="textfield"
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
          />
          <button>Upload</button>
        </form>
      </div>
    )
  }
}
