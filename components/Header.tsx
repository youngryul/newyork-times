import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <Link className={styles.title} href="/">Home</Link>
            <Link className={styles.title} href="/about">About</Link>
        </div>
    )
}