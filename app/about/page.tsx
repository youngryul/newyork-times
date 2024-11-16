import styles from "./about.module.css"
import {Metadata} from "next";

export const metadata :Metadata= {
    title: "About"

}

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ABOUT US</h1>
            <span className={styles.content}>Welcome to the official explorer for The New York Times Best Seller list explorer.</span>
            <span className={styles.content}>We hope you enjoy your stay!</span>
        </div>
    )
}