import { Link } from "react-router-dom"

const HeaderStore = ({text='tienda', path='', parrafo=''}) => {


  return (
    <div className="bg-green-600 text-gray-200 ">
        <div className="py-16 px-12 flex flex-col justify-center items-center gap-4">

        <h1 className="font-medium first-letter:uppercase text-gray-950 text-lg">{text}</h1>
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
          {parrafo}
        </p>
        </div>
      </div>
  )
}

export default HeaderStore
