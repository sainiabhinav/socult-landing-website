import styles from './page.module.css'
import TopNavbar from "@/component/navbar";
import Landing from "@/component/landing";

export default function Home() {
  return (
    <main className={styles.main}>
        <TopNavbar />
        <Landing />
    </main>
  )
}
