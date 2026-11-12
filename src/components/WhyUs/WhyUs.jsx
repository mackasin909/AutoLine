import styles from "./WhyUs.module.scss"

// замените пути на свои иконки
const ADVANTAGES = [
    {
        id: 1,
        icon: "/icons/shield.png",
        title: "Гарантия",
        description: "Даем гарантию на выполненные работы",
    },
    {
        id: 2,
        icon: "/images/layers.png",
        title: "Качественные материалы",
        description: "Используем проверенные плёнки и составы",
    },
    {
        id: 3,
        icon: "/images/lightning.png",
        title: "Соблюдение сроков",
        description: "Выполняем работы точно в оговорённый срок",
    },
    {
        id: 4,
        icon: "/images/star.png",
        title: "Опыт мастеров",
        description: "Более 10 лет опыта в детейлинге",
    },
]

export default function WhyUs() {
    return (
        <div className={styles.whyUs}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.heading}>
                        <h2 className={`title ${styles.whyTitle}`}>
                            Почему <br className={styles.brDesktop} /> выбирают нас
                        </h2>
                        <span className={styles.line} />
                    </div>

                    <ul className={styles.list}>
                        {ADVANTAGES.map((item) => (
                            <li key={item.id} className={styles.item}>
                                <img src={item.icon} alt="" className={styles.icon} />
                                <div className={styles.text}>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}