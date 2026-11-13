import styles from "./Services.module.scss"

const SERVICES = [
    {id: 1, image: "/images/PPF.jpeg", title: "PPF (защитная пленка)", description: "Прозрачная защита от сколов, царапин и реагентов.", price: "от 350 000 ₸"},
    {id: 2, image: "/images/polirovka.jpg", title: "Полировка", description: "Восстановление блеска и удаление мелких царапин.", price: "от 65 000 ₸"},
    {id: 3, image: "/images/keramika.jpg", title: "Керамическое покрытие", description: "Глубокий блеск, гидрофобный эффект и защита до 2 лет.", price: "от 120 000 ₸"},
    {id: 4, image: "/images/interier.png", title: "Химчистка салона", description: "Глубокая очистка и обновление интерьера.", price: "от 50 000 ₸"},
    {id: 5, image: "/images/pdr.png", title: "PDR (удаление вмятин)", description: "Ремонт вмятин без покраски с сохранением заводского ЛКП.", price: "от 40 000 ₸"},
    {id: 6, image: "/images/plenka.webp", title: "Оклейка плёнкой", description: "Смена цвета, стиль и дополнительная защита кузова.", price: "от 220 000 ₸"},
]

export default function Services() {
    return (
        <div className={styles.services}>
            <div className="container">
                <h2 className="title">Наши услуги</h2>
                <div className={`grid ${styles.servicesGrid}`}>
                    {SERVICES.map((service) => {
                        return (
                            <div key={service.id} className={`col-4 ${styles.serviceCard}`}>
                                <img src={service.image} alt="" className={styles.serviceImage} />
                                <div className={styles.serviceInfo}>
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                    <span>{service.price}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}