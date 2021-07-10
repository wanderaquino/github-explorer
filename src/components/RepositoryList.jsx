import {RepositoryItem} from "./RepositoryItem";
import {useEffect, useState} from "react";
import "../style/repositories.scss";

export function RepositoryList () {
    const [repositoryList, setRepositoryList] = useState([]);

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
                    repository={repo.name} 
                    description={repo.description} 
                    link={repo.html_url} 
                />)}    
            </ul>
        </section>
    )
}