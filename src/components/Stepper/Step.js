import styled from 'styled-components'

import ProgressLine from './ProgressLine'

const StyledStep = styled.li`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
  border: ${({ active }) => active ? '' : '1px solid rgba(169, 175, 189, 0.5)'};
  background-color: ${({ active }) => active ? '#664de5' : '#fff'};
  color: ${({ active }) => active ? '#ded8fa' : '#151b28'};
`

function Step({ text, showBarBefore = true, showBarAfter = true, active = false }) {
  return (
    <>
      {showBarBefore && <ProgressLine active={active}/>}
      <StyledStep active={active}>
        {text}
      </StyledStep>
      {showBarAfter && <ProgressLine active={active}/>}
    </>
  )
}

export default Step
