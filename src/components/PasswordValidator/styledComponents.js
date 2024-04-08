// Style your elements here
import styled from 'styled-components'

export const PasswordValidatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #24263c;
    height: 100vh;
    font-family: 'Roboto';
`
export const PasswordValidatorCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #383a4e;
    padding: 30px;
    border-radius: 10px;
    height: 350px;
    width: 400px;
    box-shadow:  #434451;
`
export const Heading = styled.h1`
    color:#ffffff;
    font-size: 35px;
    font-family: 'Roboto';
`
export const Paragraph = styled.p`
    color: #f8fafc;
    font-size: 15px;
    font-family: 'Roboto';
`
export const Input = styled.input`
    background-color: #edeeff;
    font-size: 14px;
    width: 300px;
    height: 35px;
    border: none;
    outline: none;

`
export const ErrorMessage = styled.p`
    color:  #ef4444;
    font-size: 12px;
    font-family: 'Roboto';
`
