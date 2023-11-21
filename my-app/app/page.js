"use client"


import Header from "@/app/compenents/Header";
import styles from './styles/Home.module.css'
import Head from "@/app/compenents/Head";
import {useState, useEffect} from "react";

export default function Home() {
// const [prenom, setPrenom]= useState("Nounage")
//     const [val, setVal]= useState(null)
//     const [tab, setTab]= useState([
//         {
//             Nom : "Antony",
//             age: 27
//         },
//         {
//             Nom : "Max",
//             age: 20
//         },
//         {
//             Nom : "Raoul",
//             age: 23
//         },
//         {
//             Nom : "Pape",
//             age: 84
//         }
//     ])
// useEffect(()=>{
//     const valeurs = tab.map((person, index)=>{
//         return <li>{person.Nom} à {person.age} ans.</li>
//     })
//     setVal(valeurs)
// }, [])
    {/*créer une insertion de tache*/}
    const [tache, setTache] = useState("")
    // on crée un tableau vide
    const [tab, setTab]= useState([""])
    // puis on crée la fonction pour permettre de recuper la valeur dès qu'on click

    const oldChange = (event) => {
        // on va chercher la valeur du champs qui est targété
        setTache(event.target.value)
    }
    // le addValue me permettra que quand on click, je recupère  "tache" que je met dans "tab"
    const addValue = () =>{
        setTab(prev =>{
            // on va aussi utilisé un id pour pouvoir supprimé automatiquement
            return [...prev, {id: prev.length, task: tache}]
        })
        // on va supprimer automatiquement la tache écrite
        setTache("")
    }
    // on crée la fonction deleteTask
    const deleteTask = (id) =>{
       const newtab = tab.filter((item)=> item.id !=id)
        setTab(newtab)
    }
  return (
    <>
        <Head />
        <Header />

        <h1><span className="material-symbols-outlined">home</span>Todolist</h1>
        {/* {prenom && age ?(*/}
        {/*     <p>{prenom} est Agé de {!age ? "xxx" : age} ans</p>*/}
        {/* ) :(*/}
        {/*     <p>Pas de donnée spécifique ...</p>*/}
        {/* )}*/}
        {/* <button onClick={()=> setAge(27)}>Ajouter l'age</button>*/}
        {/* <ul>*/}
        {/*     {val}*/}
        {/* </ul>*/}

        {/*créer une insertion de tache*/}
        <div className={styles.todolist}>
            <label htmlFor="task">Ajouter une tache</label><br/><br/>
            <input type="text" placeholder="entrer une tache" id="task" value={tache} onChange={oldChange}/><br/><br/>
            {/*on va faire que si tache existe on affiche le button avec "tache &&..." et lui mettre un onclick pour enregister tache*/}
            {tache && (
                <button className={styles.button} onClick={addValue}>Ajouter</button>
            )}
            {/*on va afficher maintenant les taches en forme de liste puis on va créer un button nous permettant de le supprimer */}
            <h3>liste des taches</h3>
            <ul>
                {tab.map((item)=>{
                    return <li key={item.id}>{item.task}<button onClick={()=>deleteTask(item.id)}>Supprimé</button></li>
                })}
            </ul>
        </div>
    </>


  )
}
