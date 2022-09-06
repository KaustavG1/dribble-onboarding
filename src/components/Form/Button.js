import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 15px;
  background-color: #664de5;
  border: none;
  border-radius: 5px;
  color: #ded8fa;
`

function Button({ text, ...props}) {

  return (
    <StyledButton {...props}>{text}</StyledButton>
  )
}

export default Button
