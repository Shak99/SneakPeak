import React, { useState } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {

  const[error, setError] = useState('')
  const[state, setState] = useState({
    username:'',
    email:'',
    password:'',
    passwordConf:'',
  })

  function handleSubmit(){

  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value    
    })
  }

  return (
    <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/sneak1.png' /> Create your account
          </Header>
          <Form autocomplete='off' onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input 
                name="username"
                placeholder="Username"
                value={state.username}
                onChange={handleChange}
                required
              />

              <Form.Input 
                name="email"
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
                required
              />

              <Form.Input 
                type="password"
                name="password"
                placeholder="password"
                value={state.pasasword}
                onChange={handleChange}
                required
              />

              <Form.Input 
                type="password"
                name="passwordConf"
                placeholder="passwordConf"
                value={state.passwordConf}
                onChange={handleChange}
                required
              />

              <Button color='teal' fluid size='large'>
                Sign Up!
              </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account <a href='#'>Sign In</a>
        </Message>
      </Grid.Column>
    </Grid>
    </>
  );
}
