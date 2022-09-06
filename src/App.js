import styled from 'styled-components'

import Container from './components/Container/Container'

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <StyledBackground>
      <Container />
    </StyledBackground>
  );
}

export default App;
