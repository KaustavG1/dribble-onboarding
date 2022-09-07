import styled from 'styled-components'

import Button from './Button'
import { TOTAL_STEPS } from '../Container/Container'

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

function Form({ currentStep, nextStep, steps }) {
  const handleClick = (event) => {
    event.preventDefault();
    nextStep()
  }

  const buttonText =  (currentStep === TOTAL_STEPS) ? "Launch Eden" : "Create Workspace"

  return (
    <StyledForm>
      {steps[currentStep - 1].formRenderer}
      <br/>
      <Button onClick={handleClick} text={buttonText} />
    </StyledForm>
  )
}

export default Form
