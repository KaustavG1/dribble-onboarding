import styled from 'styled-components'

const StyledText = styled.div`
  font-size: medium;
  color: #8c96a8;
`

function Text({ children }) {
  return (
    <StyledText>{children}</StyledText>
  )
}

export default Text
