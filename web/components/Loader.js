import styles from "@/styles/Loader.module.css";

import React from 'react'

export default function Loader() {
    return (
        <div>
            <div class={styles.lds_ripple}><div></div><div></div></div>
        </div>
    )
}