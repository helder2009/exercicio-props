import "./style.css"

export default function Livro({ titulo, autor, ano,}) {
    return(
        <div className="center">
            <img src = "https://imgs.search.brave.com/xP2-XfIi3o3ngCbI_7syea_zHFf6dc4ORvqYhymqUuU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cG5nLmNvbS5ici9s/b2dvcy9mbGFtZW5n/by0xNS5zdmc"
            <h2 className="Titulo">Titulo: {titulo}</h2>
            <p className="Autor">Autor: {autor} </p>
            <p className="Ano">Ano: {ano} </p>
            <hr />
        </div>
    )
}