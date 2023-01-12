import PropButton from '../index'

function Button() {

  function ShowEvent() {
    console.log(`Evento acionado`)
  }

  return(
    <>
      <p>Clique para disparar um evento no console</p>
      <PropButton event={ShowEvent} text="Clique Aqui!"/>
    </>
  )
}

export default Button;