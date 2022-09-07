import styled from 'styled-components'

const StyledProgressLine = styled.div`
  height: 1px;
  width: 25px;
  background-color: ${({ active }) => active ? '#664de5' : 'rgba(169, 175, 189, 0.5)'};
`

function ProgressLine({ active }) {
  return (
    <StyledProgressLine active={active}/>
  )
}

export default ProgressLine
