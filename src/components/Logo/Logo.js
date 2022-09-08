import styled from 'styled-components'

import logo from '../../assets/Logo.png';

const StyledLogo = styled.div`
  font-size: x-large;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImg = styled.img`
  padding-right: 10px;
  height: 24px;
  width: 24px;
`

function Logo() {
  return (
    <StyledLogo>
      <StyledImg src={logo}/>
      <div>Eden</div>
    </StyledLogo>
  )
}

export default Logo
