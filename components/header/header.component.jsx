import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useStoreLocation } from '../../context/StoreLocationContext'
import SearchBox from '../search-box/searchBox.component'

function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const { locationData } = useStoreLocation()
  const router = useRouter()

  const isHomePage = router.asPath === '/'

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
      <header className="bg-white  border-b-2 border-orange-400 p-1 py-2 md:rounded-none">
        <nav className="flex items-center justify-between px-0 md:px-8">
          {/* Left Side: Logo */}
          <div className="flex items-center flex-1 justify-start">
            <Link href="/">
              <img
                src="/site-logo.png"
                alt="Site Logo"
                className="max-w-[220px] md:max-w-[300px]"
              />
            </Link>
          </div>

          {/* Right Side: Location and Search/Home Button */}
          <div
            className={`flex items-center justify-end ${
              locationData.name ? 'gap-2' : 'gap-6'
            }`}
          >
            <Link
              href="/location"
              className="flex items-center gap-1 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <img
                src="/geo-alt-fill.svg"
                alt="location-icon"
                className="w-7 h-7 md:w-12 md:h-12"
              />
              {locationData.name && (
                <span className="text-xs text-gray-500 truncate max-w-[60px] md:max-w-[120px]">
                  {locationData.name}
                </span>
              )}
            </Link>

            {isHomePage ? (
              <button
                className="p-0 m-0 bg-transparent border-none outline-none cursor-pointer flex-shrink-0"
                onClick={toggleSearch}
              >
                <img
                  src="/search.svg"
                  alt="search-icon"
                  className={`w-7 h-7 md:w-12 md:h-12 ${
                    showSearch ? 'animate-rotateOnce' : ''
                  }`}
                />
              </button>
            ) : (
              <button
                className="p-0 m-0 bg-transparent border-none outline-none cursor-pointer flex-shrink-0"
                onClick={handleHomeClick}
              >
                <img
                  src="/house.svg"
                  alt="home-icon"
                  className="w-7 h-7 md:w-12 md:h-12"
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
