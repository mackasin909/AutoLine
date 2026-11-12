export async function POST(request) {
    const { name, phone, car, service, comment } = await request.json()

    if (!name || !phone || !service) {
        return Response.json({ error: "Missing fields" }, { status: 400 })
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
        console.error("Telegram env vars are missing", { hasToken: !!token, hasChatId: !!chatId })
        return Response.json({ error: "Server is not configured" }, { status: 500 })
    }

    const text = [
        "Новая заявка",
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        `Авто: ${car || "-"}`,
        `Услуга: ${service}`,
        `Комментарий: ${comment || "-"}`,
    ].join("\n")

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
    })

    if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        console.error("Telegram error:", res.status, data)
        return Response.json(
            { error: "Telegram error", telegram: data },
            { status: 502 }
        )
    }

    return Response.json({ ok: true })
}