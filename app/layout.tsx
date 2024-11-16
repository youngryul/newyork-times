import * as React from "react";
import Header from "../components/Header";
import "./styles/global.css"

export default function Layout({ children }:{ children:React.ReactNode}) {
    return (
       <html lang="en">
            <body>
                <Header />
                { children }
            </body>
       </html>
    )
}