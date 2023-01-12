function RenderizacaoLista() {
  const cursos = ["React", "Angular", "Vue"];

  return (
    <>
      <h1>Renderização de Lista</h1>
      {
        cursos.map((curso, index) => (
          <p key={index}>{curso}</p>
        ))
      }
    </>
  )
}
export default RenderizacaoLista;