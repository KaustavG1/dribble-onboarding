import styled from 'styled-components'

import Step from './Step'

const StyledStepper = styled.ul`
  display: flex;
  box-sizing: border-box;
  padding-left: 0px;
  align-items: center;
  width: 60%;
  list-style-type: none;
`

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

function Stepper({ currentStep, steps }) {
  return (
    <StyledStepper>
      <StyledWrapper>
        {steps.map(({ stepIndex }) => {
          const barBefore = stepIndex !== 1 ? true : false
          const barAfter = stepIndex === steps.length ? false : true
          const active = currentStep >= stepIndex ? true : false

          return (
            <Step
              key={stepIndex}
              text={stepIndex}
              showBarBefore={barBefore}
              showBarAfter={barAfter}
              active={active}
            />
          )
        })}
      </StyledWrapper>
    </StyledStepper>
  )
}

export default Stepper
