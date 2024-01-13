import { Link } from "react-router-dom"

const HeaderStore = ({text='tienda', path=''}) => {


  return (
    <div className="bg-green-600 text-gray-100 ">
        <div className="py-16 px-12 flex flex-col justify-center items-center gap-4">

        <h1 className="font-medium first-letter:uppercase">{text}</h1>
        <div className="flex gap-2">
          <Link
            to="/"
            className="underline
"
          >
            Inicio
          </Link>
          <span>/</span>
          <Link
            to="/tienda"
            className="underline
"
          >
            Tienda
          </Link>
          <span className="first-letter:uppercase">{path}</span>
        </div>

        <p className="text-center">
          Esse occaecat incididunt deserunt laborum est cillum fugiat commodo et
          proident. Nostrud minim occaecat velit do deserunt est irure esse
          deserunt ex consectetur laboris. Eiusmod pariatur est reprehenderit
          est aliqua exercitation elit esse. Anim esse labore pariatur commodo
          enim dolore pariatur pariatur sint.
        </p>
        </div>
      </div>
  )
}

export default HeaderStore
