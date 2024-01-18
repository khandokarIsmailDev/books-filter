import React from 'react';
import SearchBook from "./SearchBook";
import BookHero from "./BookHero";
import SortBook from "./SortBook";

const BookHeader = ({sorTing ,onSearch}) => {
    return (
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
      <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        {/* info , title , search */}
        <div>
          <BookHero/>
          <SearchBook onSearch={onSearch}/>
        </div>
        {/* sort - filter */}
        <SortBook sortBook={sorTing}  />
      </div>
    </header>
    );
};

export default BookHeader;