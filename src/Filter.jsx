export default function Filter({ filter, setFilters, filters }) {
  return (
    <div className="flex">
      <p className="text-desaturatedDarkCyan font-bold bg-lightGrayishCyan px-1.2 py-0.4 rounded-tl-md rounded-bl-md">
        {filter}
      </p>
      <div
        className="w-[30px] rounded-tr-md rounded-br-md bg-desaturatedDarkCyan hover:bg-veryDarkGrayishCyan cursor-pointer transition-colors duration-300 flex justify-center items-center"
        onClick={() => setFilters(filters.filter((f) => f !== filter))}
      >
        <img src="icon-remove.svg" alt="remove icon" />
      </div>
    </div>
  )
}
