import styles from "@/styles/Loader.module.css";

import React from 'react'

export default function Loader() {
    return (
        <div>
            <div className={styles.lds_grid}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
