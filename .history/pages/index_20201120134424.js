import { useState } from 'react'
function Home(){
    return <div>Cleber</div>
}

function Contador(){
    const [contador,setContador]=useState(1);
    return(
        <div></div>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar Contador</button>
        </div>
    )
}

export default Home