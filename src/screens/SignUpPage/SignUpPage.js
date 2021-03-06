import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../services/user'
import { FormControl, FormLabel, Input, Button, Heading, InputLeftElement, InputGroup } from "@chakra-ui/react"
import { AtSignIcon, LockIcon, EmailIcon } from '@chakra-ui/icons'
import { Anchor, FormContainer, SignUpContainer, Logo, Message, MainContainer } from './styled'
import alien from '../../assets/alien.svg'
import { goToLogin } from '../../router/coordinator'


function SignUpPage() {
  const { form, onChange, reset } = useForm({ email: "", password: "", username: "" })
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const handleSubmission = (e) => {
    e.preventDefault()
    signUp(form, history, setLoading)
    reset()
  }

  return (
    <MainContainer>
      <SignUpContainer borderWidth="1px" borderRadius="lg">
        <Logo src={alien} />
        <Heading textAlign="center" p="0.2em">Sign up</Heading>
        <FormContainer onSubmit={handleSubmission}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AtSignIcon color="gray.300" />}
              />
              <Input required placeholder="Create a username" value={form.username} onChange={onChange} name="username" />
            </InputGroup>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input required placeholder="Type your email" type="email" onChange={onChange} value={form.email} name="email" />
            </InputGroup>

          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input required placeholder="Type a password" type={"password"} value={form.password} onChange={onChange} name="password" />
            </InputGroup>
          </FormControl>
          <Button isLoading={loading} colorScheme="teal" variant="solid" type="submit">Sign up</Button>
        </FormContainer>
        <Message>
          <h1>Already has an account?</h1>
          <Anchor onClick={() => goToLogin(history)}>Log in!</Anchor>
        </Message>
      </SignUpContainer>
    </MainContainer>
  )
}

export default SignUpPage;