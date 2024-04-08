// Write your code here
import {useState} from 'react'

import {
  PasswordValidatorContainer,
  PasswordValidatorCardContainer,
  Heading,
  Paragraph,
  Input,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, setUserInput] = useState('')

  const onChangeInput = event => setUserInput(event.target.value)

  const stars = userInput.lenght * '* '

  const errorMessage =
    userInput.length < 8 ? 'Your password must be at least 8 characters' : ''

  return (
    <PasswordValidatorContainer>
      <PasswordValidatorCardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" onChange={onChangeInput} value={userInput} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </PasswordValidatorCardContainer>
    </PasswordValidatorContainer>
  )
}

export default PasswordValidator
