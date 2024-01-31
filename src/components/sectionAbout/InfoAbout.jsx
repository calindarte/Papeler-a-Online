
const InfoAbout = ({titulo, parrafo}) => {
  return (
    <div className="flex flex-col gap-4">
        <h2 className="font-bold ">{titulo}</h2>
        <p className="text-gray-700 md:text-lg text-base">
          {parrafo}
        </p>
      </div>
  )
}

export default InfoAbout
