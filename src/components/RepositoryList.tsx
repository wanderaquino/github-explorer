import {RepositoryItem} from "./RepositoryItem";
import {useEffect, useState} from "react";
import "../style/repositories.scss";


//Nome para interface de estado
interface Repository {
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList () {
    const [repositoryList, setRepositoryList] = useState<Repository[]>([]);

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
            .then(response => response.json())
            .then(data => setRepositoryList(data));
            }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Respositórios</h1>
            <ul>
                {repositoryList.map(repo => 
                <RepositoryItem 
                    key={repo.name} 
                    repository={repo}
                />)}    
            </ul>
        </section>
    )
}