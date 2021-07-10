import {RepositoryItem} from "./RepositoryItem";
import {useEffect, useState} from "react";
import "../style/repositories.scss";

const repositoryData = {
    repository: "Unform 01",
    description: "Forms in React",
    link: "https://github.com"
}

export function RepositoryList () {
    const [repositoryList, setRepositoryList] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Respositórios</h1>
            <ul>
                <RepositoryItem {... repositoryData}/>
                <RepositoryItem {... repositoryData}/>
                <RepositoryItem {... repositoryData}/>
            </ul>
        </section>
    )
}