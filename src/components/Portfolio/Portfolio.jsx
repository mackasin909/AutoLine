"use client"
import { useState } from "react"
import styles from "./Portfolio.module.scss"

const FILTERS = ["Все работы", "PPF", "Полировка", "Керамика", "Химчистка", "PDR", "Оклейка"]

const WORKS = [
    { id: 1, image: "https://img.jamesedition.com/listing_images/2026/03/18/16/20/36/83e14423-0e72-4e3e-b48d-fc195ea71918/je/1900xxs.jpg", category: "Полировка" },
    { id: 2, image: "https://img.jamesedition.com/listing_images/2026/09/21/15/55/50/914fa457-375d-4fb4-92d5-bc039e672da4/je/1900xxs.jpg", category: "Химчистка" },
    { id: 3, image: "https://img.jamesedition.com/listing_images/2026/10/16/13/06/52/a58dd446-5218-4350-b286-bd221205c092/je/1900xxs.jpg", category: "Керамика" },
    { id: 4, image: "https://img.jamesedition.com/listing_images/2026/09/21/15/55/50/005f4a5b-69e2-43de-b39a-9347aeafa7a9/je/1900xxs.jpg", category: "Оклейка" },
    { id: 5, image: "https://img.jamesedition.com/listing_images/2026/11/03/15/25/39/e0527512-4e29-42b2-a0e4-c8f260a1be5f/je/1900xxs.jpg", category: "PPF" },
    { id: 6, image: "https://img.jamesedition.com/listing_images/2026/10/23/15/31/55/a581f2c7-0ff4-4028-8900-76abf820b8a6/je/1900xxs.jpg", category: "PDR" },
]

export default function Portfolio() {
    const [active, setActive] = useState("Все работы")

    const visibleWorks =
        active === "Все работы"
            ? WORKS
            : WORKS.filter((work) => work.category === active)

    return (
        <div className={styles.portfolio}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={`title ${styles.portfolioTitle}`}>Портфолио</h2>

                    <div className={styles.filters}>
                        {FILTERS.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                className={`${styles.filter} ${active === filter ? styles.filterActive : ""}`}
                                onClick={() => setActive(filter)}
                                aria-pressed={active === filter}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.gallery}>
                    {visibleWorks.map((work) => (
                        <div key={work.id} className={styles.work}>
                            <img src={work.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}