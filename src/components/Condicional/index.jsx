import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function submitEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    setEmail("");
  }

  function clearEmail() {
    setUserEmail("");
  }

  return (
    <>
      <h2>Renderização Condicional</h2>
      <form>
        <input type="email"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)} value={email}/>
        <button type="submit" onClick={submitEmail}>Enviar Email</button>
      </form>

      {userEmail && (
        <div>
          <p>O email do usuário é: {userEmail}</p>
          <button onClick={clearEmail}>Limpar Email</button>
        </div>
      )}
    </>
  )
}

export default Condicional;