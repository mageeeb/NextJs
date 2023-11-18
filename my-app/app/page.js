"use client"


import Header from "@/app/compenents/Header";
import styles from './styles/Home.module.css'
import Head from "@/app/compenents/Head";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Head />
        <Header />
        <div>
           <h1><span className="material-symbols-outlined">home</span>Accueil</h1>

        </div>
    </main>
  )
}
