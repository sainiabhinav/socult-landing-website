import styles from "@/app/page.module.css";
import TopNavbar from "@/component/navbar";
import College from "@/component/college";

export default function Home() {
    return (
        <main className={styles.main}>
            <TopNavbar />
            <College />
        </main>
    )
}
