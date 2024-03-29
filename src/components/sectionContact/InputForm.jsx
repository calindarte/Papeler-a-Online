
const InputForm = ({type, id, label}) => {
  return (
    <>
    <label htmlFor={id} className="font-medium ">{label}</label>
    <input type={type} id={id} autoComplete="off" className="focus:outline-none p-2 bg-transparent border-b-2 border-amber-600 md:text-lg tracking-wide"/>
    </>

  )
}

export default InputForm
