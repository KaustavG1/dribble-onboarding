import styled from 'styled-components'

const Toast = styled.div`
  color: #fff;
  background-color: #eb0707;
  border-radius: 5px;
  padding: 10px 15px;
  box-sizing: border-box;
  position: absolute;
  display: flex;
  top: 0;
`

const Message = styled.div`
  padding-right: 15px;
`

const Close = styled.div`
  cursor: pointer;
`

function ErrorToast({ children, close }) {
  return (
    <Toast>
      <Message>{children}</Message>
      <Close onClick={close}>&#10005;</Close>
    </Toast>
  )
}

export default ErrorToast
