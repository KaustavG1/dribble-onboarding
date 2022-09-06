import styled from 'styled-components'

const TextWrapper = styled.div`
  text-align: center;
`

const StyledHeader = styled.div`
  font-size: xx-large;
  padding-bottom: 10px;
  font-weight: bold;
  color: #151b28;
`

const StyledText = styled.div`
  font-size: medium;
  color: #8c96a8;
`

function TextComponent() {
  return (
    <TextWrapper>
      <StyledHeader>Welcome! First things first...</StyledHeader>
      <StyledText>You can always change them later</StyledText>
    </TextWrapper>
  )
}

export default TextComponent
