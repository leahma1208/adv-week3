import {Save, Read} from '@/utils/helpers';
import books from '../../utils/books.json';
import {GoToPage} from '@/utils/func';


export default async function handler(req, res) {

  //HELPER FUNCTIONS FOR YOU TO USE!
  console.log(req.query, req.body)
  //await Save("test", json);
  //const files = await Read();

  //detect if filter/save/read
  // const cut = books.slice(0,5);
  // const cut2 = books.splice(0,5)


  var lists = [];
  if(req.query.page){
    const numresults = req.query.num || 10; // if it exists go to num else go to 10
    lists = GoToPage(req.query.page, books, numresults);
  }
  if(req.query.bookID){
    lists = books.filter(o=>o.bookID === Number(req.query.bookID));
  }

  res.status(200).json(lists);
}
