import React from 'react'
import {Html, Head, Main, NextScript} from "next/document";

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap"
                              rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                      rel="stylesheet" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>

        </Html>
    )
}

export default Document