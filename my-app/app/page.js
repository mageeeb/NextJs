"use client"


import Header from "@/app/compenents/Header";
import styles from './styles/Home.module.css'
import Head from "@/app/compenents/Head";
import {useState, useEffect} from "react";

export default function Home() {
const [prenom, setPrenom]= useState("Nounage")
    const [val, setVal]= useState(null)
    const [tab, setTab]= useState([
        {
            Nom : "Antony",
            age: 27
        },
        {
            Nom : "Max",
            age: 20
        },
        {
            Nom : "Raoul",
            age: 23
        },
        {
            Nom : "Pape",
            age: 84
        }
    ])
useEffect(()=>{
    const valeurs = tab.map((person, index)=>{
        return <li>{person.Nom} à {person.age} ans.</li>
    })
    setVal(valeurs)
}, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Head />
        <Header />
        <div>
           {/*<h1><span className="material-symbols-outlined">home</span>Accueil de {!prenom ? "user" : prenom}</h1>*/}
           {/* {prenom && age ?(*/}
           {/*     <p>{prenom} est Agé de {!age ? "xxx" : age} ans</p>*/}
           {/* ) :(*/}
           {/*     <p>Pas de donnée spécifique ...</p>*/}
           {/* )}*/}
            <button onClick={()=> setAge(27)}>Ajouter l'age</button>
            <ul>
                {val}
            </ul>

        </div>
    </main>
  )
}
