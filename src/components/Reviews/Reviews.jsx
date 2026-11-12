"use client"
import { useRef } from "react"
import styles from "./Reviews.module.scss"

// замените аватарки на свои (можно подставить url)
const REVIEWS = [
    {
        id: 1,
        name: "Алихан К.",
        rating: 5,
        text: "Оклеивал кузов в PPF. Качество на высшем уровне, всё ровно и аккуратно. Отдельное спасибо за отношение!",
    },
    {
        id: 2,
        name: "Ернар С.",
        rating: 5,
        text: "Делал полировку и керамику. Машина выглядит как новая. Рекомендую!",
    },
    {
        id: 3,
        name: "Айгерим М.",
        rating: 5,
        text: "Чистила салон — результат отличный. Приятный сервис и внимательный персонал.",
    },
    {
        id: 4,
        name: "Диас Т.",
        rating: 5,
        text: "Сделали PDR без покраски, вмятины как не было. Быстро и по адекватной цене.",
    },
]

function Star() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
    )
}

export default function Reviews() {
    const trackRef = useRef(null)

    const scrollByCard = (direction) => {
        const track = trackRef.current
        if (!track) return
        const card = track.querySelector("li")
        const step = card ? card.offsetWidth + 20 : track.clientWidth
        track.scrollBy({ left: direction * step, behavior: "smooth" })
    }

    return (
        <div className={styles.reviews}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.heading}>
                        <h2 className={`title ${styles.reviewsTitle}`}>Отзывы клиентов</h2>
                        <span className={styles.line} />
                    </div>

                    <div className={styles.sliderBlock}>
                        <div className={styles.arrows}>
                            <button
                                type="button"
                                className={styles.arrow}
                                onClick={() => scrollByCard(-1)}
                                aria-label="Назад"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                </svg>
                            </button>
                            <button
                                type="button"
                                className={styles.arrow}
                                onClick={() => scrollByCard(1)}
                                aria-label="Вперёд"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </button>
                        </div>

                        <ul className={styles.track} ref={trackRef}>
                            {REVIEWS.map((review) => (
                                <li key={review.id} className={styles.card}>
                                    <div className={styles.author}>
                                        <div className={styles.avatar} aria-hidden="true">{review.name[0]}</div>
                                        <div className={styles.authorInfo}>
                                            <h4>{review.name}</h4>
                                            <div className={styles.stars} aria-label={`Оценка ${review.rating} из 5`}>
                                                {Array.from({ length: review.rating }).map((_, i) => (
                                                    <Star key={i} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p>{review.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}