import { Link } from "@remix-run/react"

const Header = () => {
  return (
    <header className="py-6 mb-4 border-b border-sky-100">
      <div className="container mx-auto flex">
        <Link
          to="/"
          className="decoration-transparent bg-white mx-6 md:mx-0">
          <div className="relative hover:bg-sky-900 hover:text-white text-sky-900 py-1 px-px rounded">
            <div className="absolute top-0 left-0 border-2 border-sky-900 rounded w-[calc(100%+7px)] h-[calc(100%+7px)] z-0" />
            <span className="text-xl no-underline font-ibm font-bold italic link rounded z-10 px-4">{`{ REACT COURSE }`}</span>
            <div className="absolute bottom-0 right-0 border-2 border-sky-900 rounded w-[calc(100%+7px)] h-[calc(100%+7px)] z-0" />
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
