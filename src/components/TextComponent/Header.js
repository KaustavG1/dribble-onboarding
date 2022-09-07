import styled from 'styled-components'

const StyledHeader = styled.div`
  font-size: xx-large;
  padding-bottom: 10px;
  font-weight: bold;
  color: #151b28;
`

function Header({ children }) {
  return (
    <StyledHeader>{children}</StyledHeader>
  )
}

export default Header
