import React, { useState } from 'react';

const SearchBook = ({onSearch}) => {
  const [searchBook,setSearchBook] = useState("")

  function handleClick(e){
    e.preventDefault()
    onSearch(searchBook)
  }


    return (
        <div>
            <form>
            <div className="flex">
              <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#00c3ff5f] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-white pl-4 py-2.5 pr-0 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                  placeholder="Search Book"
                  required=""
                  value={searchBook}
                  onChange={()=>setSearchBook(event.target.value)}
                />
                <div className="absolute right-0 top-0 flex h-full items-center">
                  <button
                    type="submit"
                    className=" flex items-center space-x-1.5  bg-[#00C3FF] px-4 py-3 text-sm text-white"
                    onClick={handleClick}
                  >
                    <svg
                      className="h-[14px] w-[14px]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
};

export default SearchBook;