const RedesSociales = ({url,logo, phoneNumber }) => {


  return (
    <>
    {phoneNumber? (
      <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer">
        <img src={logo} alt="" className="h-8 w-8 rounded-full hover:-translate-y-1 hover:scale-100 duration-300" />
      </a>
    ) : (
      <a href={url} target="_blank" rel="noreferrer">

        <img src={logo} alt="" className="h-8 w-8 rounded-full hover:-translate-y-1 hover:scale-100 duration-300" />
      </a>
    )}
    
    </>
  

  );
};

export default RedesSociales;
