"use client"
import { useState } from "react"
import { IMaskInput } from "react-imask"
import styles from "./BookingForm.module.scss"

const SERVICES = ["PPF (защитная пленка)", "Полировка", "Керамика", "Химчистка", "PDR", "Оклейка"]

const INITIAL = { name: "", phone: "", car: "", service: "", comment: "" }

export default function BookingForm() {
    const [form, setForm] = useState(INITIAL)
    const [status, setStatus] = useState("idle")

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const digits = form.phone.replace(/\D/g, "")
        if (digits.length !== 11) {
            setStatus("error")
            return
        }

        setStatus("sending")
        try {
            const res = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                console.log("Ответ сервера:", data)
                throw new Error("Request failed")
            }
            setForm(INITIAL)
            setStatus("success")
        } catch {
            setStatus("error")
        }
    }

    return (
        <div className={styles.booking}>
            <div className="container">
                <form className={styles.wrapper} onSubmit={handleSubmit}>
                    <div className={styles.heading}>
                        <h2 className={`title ${styles.bookingTitle}`}>
                            Записаться <br className={styles.brDesktop} /> на услугу
                        </h2>
                        <span className={styles.line} />
                        <p>
                            Оставьте заявку, и мы свяжемся <br className={styles.brDesktop} /> с вами в ближайшее время.
                        </p>
                    </div>

                    <div className={styles.fields}>
                        <label className={styles.field}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                            </svg>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Ваше имя"
                                required
                            />
                            <span className={styles.req}>*</span>
                        </label>

                        <label className={styles.field}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>
                            <IMaskInput
                                mask="+7 000 000 00 00"
                                lazy={false}
                                placeholderChar="_"
                                type="tel"
                                inputMode="tel"
                                name="phone"
                                value={form.phone}
                                onAccept={(value) => setForm((prev) => ({ ...prev, phone: value }))}
                                placeholder="Телефон"
                                required
                            />
                            <span className={styles.req}>*</span>
                        </label>

                        <label className={styles.field}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2z"/>
                                <path d="M4.862 4.276 3.906 6.19a.51.51 0 0 1-.497.31H3a.5.5 0 0 0 0 1h.153A2 2 0 0 0 2 9v3.5a.5.5 0 0 0 .5.5H3v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13h6v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13h.5a.5.5 0 0 0 .5-.5V9a2 2 0 0 0-1.153-1.5H13a.5.5 0 0 0 0-1h-.409a.51.51 0 0 1-.497-.31l-.956-1.914A1.5 1.5 0 0 0 9.797 3H6.203a1.5 1.5 0 0 0-1.341.776M10.6 4.1l.956 1.914H4.444L5.4 4.1a.5.5 0 0 1 .447-.276h4.306a.5.5 0 0 1 .447.276"/>
                            </svg>
                            <input
                                type="text"
                                name="car"
                                value={form.car}
                                onChange={handleChange}
                                placeholder="Марка и модель авто"
                            />
                        </label>

                        <label className={styles.field}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Выберите услугу</option>
                                {SERVICES.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                            <span className={styles.req}>*</span>
                        </label>

                        <label className={`${styles.field} ${styles.fieldWide} ${styles.fieldTextarea}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                            </svg>
                            <textarea
                                name="comment"
                                value={form.comment}
                                onChange={handleChange}
                                placeholder="Комментарий (необязательно)"
                                rows={3}
                            />
                        </label>
                    </div>

                    <div className={styles.submitBlock}>
                        <button type="submit" className={styles.submit} disabled={status === "sending"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                            </svg>
                            {status === "sending" ? "Отправка..." : "Отправить заявку"}
                        </button>

                        <p className={styles.note}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#2AABEE" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                            </svg>
                            Заявка придёт нам <br className={styles.brDesktop} /> в Telegram
                        </p>

                        {status === "success" && (
                            <p className={styles.success} role="status">Спасибо! Мы скоро свяжемся с вами.</p>
                        )}
                        {status === "error" && (
                            <p className={styles.error} role="alert">Не удалось отправить. Попробуйте ещё раз.</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}