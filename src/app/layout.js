import Header from "@/components/Header/Header";
import "../styles/global.scss";

export const metadata = {
  title: "Auto Line",
  description: "Detailind Studio | Almaty",
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
