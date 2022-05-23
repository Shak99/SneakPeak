import React, { useState } from "react";
import "./LoginPage.css";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";

export default function LoginPage(props) {
  return (
    <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/sneak1.png' /> Sign into your account
          </Header>
          <Form size='large'>
            <Segment stacked>
            <Form.Input 
                name="name"
                placeholder="Name"
                value={state.name}
                onChange={handleChange}
                required
              />

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
