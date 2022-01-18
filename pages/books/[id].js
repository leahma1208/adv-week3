import Head from 'next/head';
import ax from 'axios';
import {useRouter} from 'next/router';
import { useState, useEffect } from 'react';

import Book from "../../comps/Book";

export default function BooksID() {

  const [book, setBook] = useState(null);
  
  const router = useRouter();
  const {id} = router.query;

  useEffect(()=>{
    if(id){
      const GetBook = async()=>{
        const res = await ax.get("/api/books", {
          params:{
            bookID:id
          }
        });
    
   
        console.log(res.data);
        if(res.data[0]){
          setBook(res.data[0]);
        }

        
      }

      GetBook();
    }
  },[id])
  
  if(book === null){
    return <div>No results for this id - {id}</div>
  }

  
  return (
    <div>
      Make a new list for <b>{id}</b>
    
      <Book
        title={book.title}
        avg={book.average_rating}
        pages={book.num_pages}
        id={book.bookID}
      />

      <button onClick={()=>{
        //save in your own api!
      }}>Save</button>
    </div>
  )
}
