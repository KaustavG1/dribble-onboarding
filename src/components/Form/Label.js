import styled from 'styled-components'

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 550;
  padding-bottom: 5px;
  color: #151b28;
`

const StyledOptionalText = styled.span`
  color: #8c96a8;
`

function Label({ text, optionalText, children, ...props }) {

  return (
    <StyledLabel {...props}>
      {text}
      {optionalText && <StyledOptionalText>&nbsp;{optionalText}</StyledOptionalText>}
      {children}
    </StyledLabel>
  )
}

export default Label
