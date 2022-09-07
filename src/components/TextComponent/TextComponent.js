import styled from 'styled-components'

const TextWrapper = styled.div`
  text-align: center;
`

function TextComponent({ currentStep, steps }) {
  return (
    <TextWrapper>
      {steps[currentStep - 1].textRenderer}
    </TextWrapper>
  )
}

export default TextComponent
