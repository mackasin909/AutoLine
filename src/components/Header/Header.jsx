"use client"

import { useState } from "react"
import styles from "./Header.module.scss"
import Link from "next/link"

const LINKS = [
    { title: "Услуги", href: "#services" },
    { title: "Портфолио", href: "#portfolio" },
    { title: "Преимущества", href: "#advantages" },
    { title: "Отзывы", href: "#reviews" },
    { title: "Контакты", href: "#contacts" },
]

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerWrapper}`}>
                <Link href="/">
                    <img src="/images/logo.png" alt="" className={styles.headerLogo} />
                </Link>

                <nav
                    id="main-nav"
                    className={`${styles.headerNav} ${open ? styles.headerNavOpen : ""}`}
                >
                    <ul className={styles.headerList}>
                        {LINKS.map((link) => (
                            <li key={link.href} className={styles.headerItem}>
                                <Link
                                    className={styles.headerLink}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.headerActions}>
                    <a className={styles.headerButton} href="tel:+77017381115">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        <span className={styles.headerPhoneText}>+7 701 738 11 15</span>
                    </a>

                    <button
                        className={styles.headerBurger}
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Закрыть меню" : "Открыть меню"}
                        aria-expanded={open}
                        aria-controls="main-nav"
                    >
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </header>
    )
}