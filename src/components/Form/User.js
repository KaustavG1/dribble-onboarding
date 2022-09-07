import styled from 'styled-components'

const StyledUserWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 200px;
  border: ${({ active }) => active ? '1px solid #664de5' : '1px solid rgba(169, 175, 189, 0.5)'};
  border-radius: 5px;
  padding: 20px;
`

const StyledIcon = styled.div`
  font-size: 24px;
`

const StyledText = styled.div`
  line-height: 1.4;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};

`

function User({ icon, header, content, active }) {
  return (
    <StyledUserWrapper active={active}>
      <StyledIcon>{icon}</StyledIcon>
      <StyledText fontSize="14px" color="#151b28">{header}</StyledText>
      <StyledText fontSize="11px" color="#8c96a8">{content}</StyledText>
    </StyledUserWrapper>
  )
}

export default User
