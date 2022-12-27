import DadosPessoa from "../DadosPessoa"

export const CadastroPessoa = () => (
  <div>
    <h1>Olá</h1>
    <ul>
      <DadosPessoa nome="Mateus" ano_nascimento="1997" cidade="São Paulo" />
      <DadosPessoa nome="Luana" ano_nascimento="1999" cidade="Rio de janeiro" />
      <DadosPessoa />
    </ul>
  </div>
)
