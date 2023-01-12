import PropButton from '../index'
import { CardPropButton } from "../styles"

function Button() {

  function ShowEvent() {
    console.log(`Evento acionado`)
  }

  return(
    <CardPropButton>
      <p>Clique para disparar um evento no console</p>
      <PropButton event={ShowEvent} text="Clique Aqui!"/>
    </CardPropButton>
  )
}

export default Button;