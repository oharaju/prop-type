import PropTypes from 'prop-types';

function DadosPessoa({nome, ano_nascimento, cidade}) {
  return <li>{nome} - {ano_nascimento} - {cidade}</li>
}

DadosPessoa.propTypes = {
  nome: PropTypes.string,
  ano_nascimento: PropTypes.string,
  cidade: PropTypes.string
}

DadosPessoa.defaultProps = {
  nome: "Sem informação",
  ano_nascimento: "Sem informação",
  cidade: "Sem informação"
}

export default DadosPessoa;