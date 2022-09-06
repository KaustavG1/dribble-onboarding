import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 15px;
  border: 1px solid rgba(169, 175, 189, 0.5);
  color: #151b28;

  border-radius: ${({isGroup}) => isGroup ? '0px 5px 5px 0px' : '5px'};
  position: ${({type}) => type === 'radio' ? 'absolute' : 'static'};
  height: ${({type}) => type === 'radio' ? '1px' : ''};
  width: ${({stretch, type}) => {
    if (type === 'radio') {
      return '1px'
    }

    if (stretch) {
      return '100%'
    }

    return ''
  }};

  &:focus {
    outline: none;
  }
`

function Input(props) {

  return (
    <StyledInput {...props} />
  )
}

export default Input
