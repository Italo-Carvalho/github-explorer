import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";



 
export function RepositoryList(){

    //sempre começar a variavel com o mesmo tipo da que eu vou armazena.
    const [repositories, setRepositories] = useState([]);

    //Toda vez que [repositories] mudar, está função será executada.
    //Caso esteja vazia [], essa função só executará a primeira vez que esse
    //componente seja exibido em tela.
    //Caso não tenha o segundo parametro o [useEffect] execurata em loop!.
    useEffect(()=>{
        fetch('https://api.github.com/users/Italo-Carvalho/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
                
            </ul>
        </section>
    );
}
