import { useEffect, useState } from "react"
import Job from "./Job"
import Filter from "./Filter"

const jobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "photosnap.svg",
    isNew: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "manage.svg",
    isNew: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "account.svg",
    isNew: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "myhome.svg",
    isNew: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "loop-studios.svg",
    isNew: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "faceit.svg",
    isNew: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "shortly.svg",
    isNew: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "insure.svg",
    isNew: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "eyecam-co.svg",
    isNew: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "the-air-filter-company.svg",
    isNew: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
]

export default function App() {
  const [filters, setFilters] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredJobs(jobs)
    } else {
      setFilteredJobs(
        jobs.filter((job) => {
          return filters.every(
            (filter) =>
              job.languages.includes(filter) ||
              job.role.includes(filter) ||
              job.level.includes(filter)
          )
        })
      )
    }
  }, [filters])

  useEffect(() => {
    setFilteredJobs(jobs)
  }, [])

  return (
    <div className="relative lg:static">
      <header className="bg-desaturatedDarkCyan bg-[url('../public/bg-header-mobile.svg')] bg-cover bg-no-repeat lg:bg-[url('../public/bg-header-desktop.svg')] h-[150px]"></header>
      <section className=" max-w-[1200px] mx-auto px-2.4 py-8">
        <div className="flex flex-col gap-4.8 lg:gap-2.4 lg:relative">
          {filters.length > 0 && (
            <div className="absolute flex flex-col gap-1.6 lg:flex-row flex-wrap lg:justify-between w-full top-[0px] lg:top-[-130px] left-[0px] bg-[#fff] px-2.4 py-3.2 lg:rounded-md shadow-lg shadow-desaturatedDarkCyan/20">
              <div className="flex gap-1.6 flex-wrap">
                {filters.map((filter, i) => (
                  <Filter
                    key={i}
                    filter={filter}
                    setFilters={setFilters}
                    filters={filters}
                  />
                ))}
              </div>
              <button
                onClick={() => setFilters([])}
                className="text-desaturatedDarkCyan decoration-desaturatedDarkCyan hover:underline transition-decoration duration-300"
              >
                Clear
              </button>
            </div>
          )}

          {filteredJobs.map((job) => (
            <Job
              key={job?.id}
              job={job}
              filters={filters}
              setFilters={setFilters}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
