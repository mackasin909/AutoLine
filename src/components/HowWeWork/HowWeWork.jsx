import styles from "./HowWeWork.module.scss"

const STEPS = [
    {
        id: 1,
        icon: "/icons/text.svg",
        title: "Заявка",
        description: "Оставляете заявку на сайте или в WhatsApp",
    },
    {
        id: 2,
        icon: "/icons/search.svg",
        title: "Осмотр",
        description: "Оцениваем состояние авто и подбираем решение",
    },
    {
        id: 3,
        icon: "/icons/gear.svg",
        title: "Работа",
        description: "Выполняем все работы с вниманием к деталям",
    },
    {
        id: 4,
        icon: "/icons/car.svg",
        title: "Выдача",
        description: "Вы получаете автомобиль в идеальном состоянии",
    },
]

export default function HowWeWork() {
    return (
        <div className={styles.how}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.heading}>
                        <h2 className={`title ${styles.howTitle}`}>Как мы работаем</h2>
                        <span className={styles.line} />
                    </div>

                    <ol className={styles.steps}>
                        {STEPS.map((step, index) => (
                            <li key={step.id} className={styles.step}>
                                <div className={styles.stepContent}>
                                    <div className={styles.iconBox}>
                                        <img src={step.icon} alt="" />
                                    </div>
                                    <h4>
                                        <span className={styles.num}>{step.id}.</span> {step.title}
                                    </h4>
                                    <p>{step.description}</p>
                                </div>

                                {index < STEPS.length - 1 && (
                                    <svg
                                        className={styles.arrow}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        aria-hidden="true"
                                    >
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}