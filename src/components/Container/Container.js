import styled from 'styled-components'

import Form from '../Form/Form'
import Logo from '../Logo/Logo'
import Stepper from '../Stepper/Stepper'
import TextComponent from '../TextComponent/TextComponent'

const StyledContainer = styled.div`
  overflow: hidden;
  height: 600px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

function Container() {
  return (
    <StyledContainer>
      <Logo />
      <Stepper />
      <TextComponent />
      <Form />
    </StyledContainer>
  )
}

export default Container
