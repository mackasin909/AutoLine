"use client"
import { useState } from "react";
import styles from "./Results.module.scss"

export default function Results() {
    const [pos, setPos] = useState(50);

    return (
        <div className={styles.results}>
            <div className="container">
                <div className={styles.resultsWrapper}>
                    <div className={styles.resultsInfo}>
                        <h2 className={`title ${styles.resultsTitle}`}>
                            Реальные <br className={styles.brDesktop} /> результаты
                        </h2>
                        <img src="/icons/long-line.svg" alt="" className={styles.resultsLine} />
                        <p>
                            Посмотрите как меняется <br className={styles.brDesktop} /> автомобиль после нашей работы
                        </p>
                    </div>

                    <div className={styles.slider}>
                        <img className={styles.img} src="/images/clean-car.png" alt="После" draggable={false} />

                        <img
                            className={styles.img}
                            src="/images/dirty-car.png"
                            alt="До"
                            draggable={false}
                            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                        />

                        <span className={`${styles.label} ${styles.labelBefore}`}>До</span>
                        <span className={`${styles.label} ${styles.labelAfter}`}>После</span>

                        <div className={styles.line} style={{ left: `${pos}%` }}>
                            <div className={styles.handle}>‹ ›</div>
                        </div>

                        <input
                            className={styles.range}
                            type="range"
                            min="0"
                            max="100"
                            value={pos}
                            onChange={(e) => setPos(Number(e.target.value))}
                            aria-label="Сравнение до и после"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}