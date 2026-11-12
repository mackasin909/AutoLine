import styles from "./page.module.scss"
import Banner from "@/components/Banner/Banner"
import Services from "@/components/Services/Services"
import Results from "@/components/Results/Results"
import Portfolio from "@/components/Portfolio/Portfolio"
import HowWeWork from "@/components/HowWeWork/HowWeWork"
import WhyUs from "@/components/WhyUs/WhyUs"
import Reviews from "@/components/Reviews/Reviews"
import BookingForm from "@/components/BookingForm/BookingForm"
import Contacts from "@/components/Contacts/Contacts"
import Footer from "@/components/Footer/Footer"

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Banner />
      <section id="services"><Services /></section>
      <Results />
      <section id="portfolio"><Portfolio /></section>
      <HowWeWork />
      <section id="advantages"><WhyUs /></section>
      <section id="reviews"><Reviews /></section>
      <section id="booking"><BookingForm /></section>
      <section id="contacts"><Contacts /></section>
      <Footer />
    </div>
  )
}