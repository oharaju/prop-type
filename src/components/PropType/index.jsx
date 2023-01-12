import DadosPessoa from "./DadosPessoa"
import { CardPropType } from "./styles"

export const PropType = () => (
  <CardPropType>
    <h2>Prop Type</h2>
    <ul>
      <DadosPessoa nome="Mateus" ano_nascimento="1997" cidade="São Paulo" />
      <DadosPessoa nome="Luana" ano_nascimento="1999" cidade="Rio de janeiro" />
      <DadosPessoa />
    </ul>
  </CardPropType>
)
