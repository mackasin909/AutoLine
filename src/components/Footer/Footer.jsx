"use client"
import styles from "./Footer.module.scss"

const LINKS = ["Оклейка", "Полировка", "Керамика", "Химчистка", "PDR"]

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <img src="/images/logo.png" alt="Autoline Detailing Studio" className={styles.logo} />

                    <ul className={styles.list}>
                        <li className={`${styles.item} ${styles.itemMain}`}>
                            Детейлинг-студия в Алматы
                        </li>
                        {LINKS.map((link) => (
                            <li key={link} className={styles.item}>
                                <a href="#services">{link}</a>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className={styles.toTop}
                        onClick={scrollToTop}
                        aria-label="Наверх"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    )
}