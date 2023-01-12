import { CardRenderização } from "./styles"

function RenderizacaoLista() {
  const cursos = ["React", "Angular", "Vue"];

  return (
    <CardRenderização>
      <h2>Renderização de Lista</h2>
      {
        cursos.map((curso, index) => (
          <p key={index}>{curso}</p>
        ))
      }
    </CardRenderização>
  )
}
export default RenderizacaoLista;