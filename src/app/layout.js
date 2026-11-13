import Header from "@/components/Header/Header";
import "../styles/global.scss";

export const metadata = {
  title: "Auto Line: детейлинг-студия в Алматы",
  description: "Detailing Studio | Almaty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
