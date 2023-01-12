import { PropType } from "./components/PropType";
import Button  from './components/PropButton/Button';
import Condicional from './components/Condicional'
import RenderizacaoLista from './components/RenderizacaoLista'

function App() {
  return (
    <>
      <PropType/>
      <Button/>
      <Condicional/>
      <RenderizacaoLista />
    </>
  )
}

export default App;
