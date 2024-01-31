import { useState } from "react";
import IconAdd from "./IconAdd";
import IconMinize from "./IconMinize";

const HelpItem = ({title,parrafo}) => {
  const [openItem, setOpenItem] = useState(false);

  return (
    <>
    <button
      onClick={()=> setOpenItem(!openItem)}
      className={`w-full rounded-md flex items-center justify-between  px-4 py-3  ${
        openItem ? "bg-green-600 text-gray-50" : "bg-[#f2f2f2]"
      }`}
    >
      <span className="md:text-xl font-semibold">
        {title}
      </span>
      {openItem ? (
        <IconMinize className="fill-gray-50"/>
      ) : (
        <IconAdd/>
      )}
    </button>
    {openItem && (
            <>
              <div>
                <p className="text-pretty p-3 md:text-lg">{parrafo}
                </p>
              </div>
            </>
          )}
    </>
  );
};

export default HelpItem;
