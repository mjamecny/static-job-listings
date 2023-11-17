export default function Job({ job, filters, setFilters }) {
  const {
    featured,
    logo,
    company,
    isNew,
    position,
    level,
    role,
    postedAt,
    contract,
    location,
    languages,
  } = job

  return (
    <div
      className={`bg-[#fff] flex flex-col lg:flex-row lg:justify-between lg:items-center px-2.4 pt-3.2 pb-2.4 rounded-md ${
        featured ? "shadow-card" : "shadow-md"
      } gap-1.6 relative`}
    >
      <div className="absolute lg:hidden top-[0px] translate-y-[-50%]  left-[20px] w-[50px]">
        <img src={`public/${logo}`} alt="photosnap logo" />
      </div>
      <div className="flex gap-1.6">
        <div className="hidden lg:block w-[80px]">
          <img src={`public/${logo}`} alt="photosnap logo" />
        </div>
        <div className="flex flex-col gap-0.8">
          <div className="flex gap-1.6 items-center">
            <p className="text-desaturatedDarkCyan font-bold">{company}</p>
            <div className="flex gap-0.8">
              {isNew && (
                <p className="bg-desaturatedDarkCyan text-lightGrayishCyan uppercase rounded-full px-1.2 self-center text-center">
                  New!
                </p>
              )}
              {featured && (
                <p className="bg-veryDarkGrayishCyan text-lightGrayishCyan uppercase rounded-full px-1.2 self-center text-center">
                  Featured
                </p>
              )}
            </div>
          </div>
          <a
            href="#"
            className="font-bold hover:text-desaturatedDarkCyan transition-colors duration-300 lg:text-2"
          >
            {position}
          </a>
          <div className="flex gap-0.8 text-darkGrayishCyan">
            <p>{postedAt}</p>
            <p>&bull;</p>
            <p>{contract}</p>
            <p>&bull;</p>
            <p>{location}</p>
          </div>
        </div>
      </div>

      <hr className="text-veryDarkGrayishCyan lg:hidden" />
      <div className="flex flex-wrap gap-0.8">
        <p
          className="text-desaturatedDarkCyan font-bold bg-lightGrayishCyan rounded-md px-1.2 py-0.4 hover:bg-desaturatedDarkCyan hover:text-lightGrayishCyan transition-colors duration-300 cursor-pointer"
          onClick={() => setFilters([...filters, role])}
        >
          {role}
        </p>
        <p
          className="text-desaturatedDarkCyan font-bold bg-lightGrayishCyan rounded-md px-1.2 py-0.4 hover:bg-desaturatedDarkCyan hover:text-lightGrayishCyan transition-colors duration-300 cursor-pointer"
          onClick={() => setFilters([...filters, level])}
        >
          {level}
        </p>
        {languages?.map((language, i) => (
          <p
            key={i}
            className="text-desaturatedDarkCyan font-bold bg-lightGrayishCyan rounded-md px-1.2 py-0.4 hover:bg-desaturatedDarkCyan hover:text-lightGrayishCyan transition-colors duration-300 cursor-pointer"
            onClick={() => setFilters([...filters, language])}
          >
            {language}
          </p>
        ))}
      </div>
    </div>
  )
}
