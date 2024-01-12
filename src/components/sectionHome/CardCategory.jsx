const CardCategory = ({ text, url }) => {
  return (
    <div className="bg-[#f5f5f5] p-10 flex flex-col gap-6 items-center justify-center shadow-xl hover:bg-yellow-100 hover:cursor-pointer">
      <div className="p-3">
      <img src={url} alt={text} className="rounded-md" />

      </div>

      <p className="font-normal tracking-wider text-center text-gray-800 text-base">
        {text}
      </p>
    </div>
  );
};

export default CardCategory;
