import styled from 'styled-components'

import Input from './Input'

const StyledInputGroup = styled.div`
  width: 100%;
  display: flex;
`

const StyledDomain = styled.span`
  font-size: 14px;
  background-color: #f8f9fc;
  display: inline-block;
  text-align: center;
  padding: 15px;
  border: 1px solid rgba(169, 175, 189, 0.5);
  border-right: 0px;
  border-radius: 5px 0px 0px 5px;
`

function URLInput({ domainText, ...props }) {
  return (
    <StyledInputGroup>
      <StyledDomain>{domainText}</StyledDomain>
      <Input {...props} isGroup={true} stretch={true}/>
    </StyledInputGroup>
  )
}

export default URLInput
