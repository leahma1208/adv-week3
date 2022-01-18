import Head from 'next/head';
import ax from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import Book from '@/comps/Book'
import {useRouter} from 'next/router';


const numBooks = 45000;

export default function Books() {
  const router = useRouter()
  const [bs, setBS] = useState([]);
  const [cur_page, setCurPage] = useState(0);

  const PageClick = async(p)=>{
    const res = await ax.get("/api/books", {
      params:{
        page:p,
        num:15
      }
    });
    console.log(res.data);
    setBS(res.data);
    setCurPage(p);
  }

  var butt_arr = [];
  var ind = 1;
  for(var i = 0; i<numBooks; i+= 15){
    butt_arr.push(<button onClick={PageClick.bind(this, ind)}
    style={{backgroundColor:cur_page===ind?"pink":"white"}}
    >{ind}</button>
    
    );
    ind++;
  }
  butt_arr = butt_arr.slice(cur_page-5 < 0 ? 0 :cur_page-5, curpage+5);
  return (
    <div>
      {bs.map((o,i)=><Book
      title={o.title}
      id={o.bookID}
      avg={o.average_rating}
      pages={o.num_pages}
      
      />)}
        <div>
          {butt_arr}
        
        <button onClick={()=>PageClick(2)}>2</button>
        <button onClick={()=>PageClick(3)}>3</button>
      </div>
      
      <button onClick={()=>{
        //make a new fav list!
      }}>New Favs</button>
    </div>
  )
}
