import React from 'react'
import Link from "next/link"
import styles from "../styles/Home.module.css"

const header = () => {
    return (
      <ul className={styles.menu}>
          <li><Link href="/">Home</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/cv">CV</Link></li>
          <li><Link href="/testApi">Api</Link></li>
      </ul>
    )
}

export default header