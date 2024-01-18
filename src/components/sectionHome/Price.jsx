
  const Price = ({precio, className="text-gray-700 font-medium"}) => {
    const formatoPrecio = new Intl.NumberFormat("es-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });
    
    return (
        <span className={className}>
        {formatoPrecio.format(precio)}
      </span>
    )
  }
  
  export default Price
  
  