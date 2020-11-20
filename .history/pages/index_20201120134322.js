import { useState } from 'react'
function Home(){
    return <div>Cleber</div>
}

function Contador(){
    return(
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar Contador</button>
    )
}

export default Home