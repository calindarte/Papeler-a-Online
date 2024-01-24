import { useState } from "react";

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
      <span className="text-xl font-semibold">
        {title}
      </span>
      {openItem ? (
        <span className="material-symbols-outlined my-auto">
          check_indeterminate_small
        </span>
      ) : (
        <span className="material-symbols-outlined">add</span>
      )}
    </button>
    {openItem && (
            <>
              <div>
                <p className="text-pretty p-3 text-lg">{parrafo}
                </p>
              </div>
            </>
          )}
    </>
  );
};

export default HelpItem;
