import {RepositoryItem} from "./RepositoryItem";
import "../style/repositories.scss";

const repositoryData = {
    repository: "Unform 01",
    description: "Forms in React",
    link: "https://github.com"
}

export function RepositoryList () {
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