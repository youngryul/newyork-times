import {Suspense} from "react";
import {DETAIL_URL} from "../../api";
import styles from "./list.module.css"
import Link from "next/link";
import {Metadata} from "next";

export const metadata :Metadata= {
    title: "Book List"

}

interface IParam {
    params: Promise<{id: string}>
}


async function getBookList(id:string) {
    const response = await fetch(`${DETAIL_URL}?name=${id}`)
    const json = await response.json();

    return json.results.books;
}
export default async function List({params}:IParam) {
    const {id} = await params;
    const {book_details} = await getBookList(id);

    return (
        <div className={styles.main}>
            <Suspense fallback={<h1>Loading Book List</h1>}>
                <h1>{id.replace(/%20/g, " ")}</h1>
                <div className={styles.container}>
                    {book_details.map((book) => (
                        <div className={styles.bookCover}>
                            <img className={styles.image} key={book.book_image} src={book.book_image}/>
                            <div className={styles.title} key={book.title}>{book.title}</div>
                            <div className={styles.author} key={book.author}>{book.author}</div>
                            <button key={book.amazon_product_url} className={styles.btn}>
                                <Link className={styles.buy} href={book.amazon_product_url}>Buy Now →</Link>
                            </button>
                        </div>
                    ))}
                </div>
            </Suspense>
        </div>
    )
}