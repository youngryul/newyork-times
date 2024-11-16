import styles from "./home.module.css"
import {LIST_URL} from "../api";
import Link from "next/link";

async function getBookList() {
    const response = await fetch(LIST_URL);
    const json = await response.json();

    return json.results;
}

export default async function Home() {
    const books = await getBookList();


    return (
     <div className={styles.container}>
         <h1 className={styles.title}>The NEW YORK TIMES BEST SELLER EXPLORER</h1>
         <div className={styles.book}>
             {books.map((book)=> (
                 <button className={styles.list} key={book.list_name} >
                     <Link className={styles.name} href={`/list/${book.list_name}`}>{book.list_name} →</Link>
                 </button>
             ))}
         </div>
     </div>
    )
}