"use client"
import { useState } from "react"
import styles from "./Portfolio.module.scss"

const FILTERS = ["Все работы", "PPF", "Полировка", "Керамика", "Химчистка", "PDR", "Оклейка"]

const WORKS = [
    { id: 1, image: "/images/portfolio1.webp", category: "Полировка" },
    { id: 2, image: "/images/portfolio2.webp", category: "Химчистка" },
    { id: 3, image: "/images/portfolio3.webp", category: "Керамика" },
    { id: 4, image: "/images/portfolio4.webp", category: "Оклейка" },
    { id: 5, image: "/images/portfolio5.webp", category: "PPF" },
    { id: 6, image: "/images/portfolio6.webp", category: "PDR" },
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