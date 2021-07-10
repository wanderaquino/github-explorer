export function RepositoryItem(props) {
    console.log(props);
    return (
        <li>
            <strong>{props.repository ?? "Default"}</strong>
            <p>{props.description}</p>
            <a href={props.link}>Acessar Repositório</a>
        </li>
    )
}