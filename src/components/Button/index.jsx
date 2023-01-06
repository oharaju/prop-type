import PropButton from '../PropButton'

function Button() {

  function ShowEvent() {
    console.log(`Evento acionado`)
  }

  return(
    <>
      <p>Clique para disparar um evento</p>
      <PropButton event={ShowEvent} text="Clique Aqui!"/>
    </>
  )
}

export default Button;