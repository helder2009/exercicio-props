import Livro from "./components/Livro"

export default function App() {
  return (
    <div>
      <Livro titulo="Dom Casmurro" autor="Machado de Assis" ano="1899" />
      <Livro titulo="Ao Farol" autor="Virginia Woolf" ano="1927" />
      <Livro titulo="O Rei Lear" autor="William Shakespeare" ano="1606" />
    </div>
  )
}