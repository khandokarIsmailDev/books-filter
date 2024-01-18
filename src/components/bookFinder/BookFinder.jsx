import React, { useState } from "react";
import BookHeader from "./BookHeader";
import BookList from "./BookList";
import Books from "../../../database/book.json"
import SearchBook from './SearchBook';

const BookFinder = () => {

  let [bookList,setBookList] = useState(Books)
  
// sorting 
  function handleChangeSorting(e){
    if(e.target.value === "name_asc"){
      let sortBookAtoZ = [...bookList].sort((a,b)=>a.name.localeCompare(b.name))  // text hole localeCompare use hoy
      setBookList(sortBookAtoZ)
    }else if(e.target.value === "name_desc"){
      let sortBookZtoA = [...bookList].sort((a,b)=>b.name.localeCompare(a.name))
      setBookList(sortBookZtoA)
    }else if(e.target.value === "year_asc"){
      let sortYearAsc = [...bookList].sort((a,b)=>a.year - b.year)   //number hole localeCompare dorkar nai
      setBookList(sortYearAsc)
    }else if(e.target.value === "year_desc"){
      let sortYearDesc = [...bookList].sort((a,b)=>b.year - a.year)
      setBookList(sortYearDesc)
    }
  }

  //add favorite toggle
  function handleFavorite(bookId){
    
    setBookList(bookList.map((book)=>{
      if(book.id === bookId){
        return {...book,isFavorite:!book.isFavorite}
      }else{
        return book
      }
    }))
  }

  //add search
  function handleSearch(SearchBooks){
    let filterd = bookList.filter((book) =>{
      return book.name.toLowerCase().includes(SearchBooks.toLowerCase())
    });
    setBookList(filterd)
  }

  return (
    <>
    <BookHeader sorTing={handleChangeSorting} onSearch={handleSearch} />
    <BookList bookList={bookList} onFav={handleFavorite} />
    </>
  );
};

export default BookFinder;
