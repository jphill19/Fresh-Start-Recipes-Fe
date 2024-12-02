import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useStoreLocation } from '../../context/StoreLocationContext'
import SearchBox from '../search-box/searchBox.component'

function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const { locationData } = useStoreLocation()
  const router = useRouter()

  const isHomePage = router.pathname === '/'

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  const handleHomeClick = () => {
    router.push('/')
  }

  useEffect(() => {
    if (!isHomePage) {
      setShowSearch(false)
    }
  }, [isHomePage])

  return (
    <Fragment>
      <header className="bg-white shadow-md relative p-0 rounded-none md:rounded-xl">
        <nav className="flex items-center justify-between p-4 gap-2 md:gap-0">
          <div className="flex items-center flex-1 justify-start">
            <Link
              href="/location"
              className="flex items-center gap-0.5 md:gap-1 cursor-pointer transition-all duration-300 ease hover:scale-110"
            >
              <img
                src="/geo-alt-fill.svg"
                alt="location-icon"
                className="w-6 h-6 md:w-10 md:h-10"
              />
              {locationData.name && (
                <span className="text-xs text-gray-400 max-w-[80px] break-words md:text-sm md:text-gray-600 md:max-w-[100px]">
                  {locationData.name}
                </span>
              )}
            </Link>
          </div>
          <div className="flex items-center flex-none justify-center">
            <Link href="/">
              <img
                src="/fresh-start-recipes.png"
                alt="Site Logo"
                className="max-w-[60px] md:max-w-[150px]"
              />
            </Link>
          </div>
          <div className="flex items-center flex-1 justify-end">
            {isHomePage ? (
              <button
                className="bg-transparent border-none p-0 m-0 cursor-pointer transition-all duration-300 ease outline-none"
                onClick={toggleSearch}
              >
                <img
                  src="/search.svg"
                  alt="search-icon"
                  className={`drop-shadow w-6 h-6 md:w-10 md:h-10 transition-transform duration-700 ease ${
                    showSearch ? "animate-rotateOnce" : ""
                  }`}
                />
              </button>
            ) : (
              <button
                className="bg-transparent border-none p-0 m-0 cursor-pointer transition-all duration-300 ease outline-none"
                onClick={handleHomeClick}
              >
                <img
                  src="/house.svg"
                  alt="home-icon"
                  className="w-6 h-6 md:w-10 md:h-10"
                />
              </button>
            )}
          </div>
        </nav>

        <SearchBox showSearch={showSearch} toggleSearch={toggleSearch} />
      </header>
    </Fragment>
  )
}

export default Header