import styles from "@/app/page.module.css";
import TopNavbar from "@/component/navbar";
import Blog from "@/component/allBlog";

export default function Home() {
    return (
        <main className={styles.main}>
            <TopNavbar />
            <Blog />
        </main>
    )
}
