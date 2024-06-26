import Header from './componentes/Header'
import styled from 'styled-components'

const AppConteiner = styled.div`
  .App {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
  }

  li {
    list-style: none;
  }
`

function App() {
  return (
    <AppConteiner>
      <Header />
    </AppConteiner>
  );
}

export default App
