import styles from "@/app/page.module.css";
import TopNavbar from "@/component/navbar";
import BlogForm from "@/component/blogForm";

export default function Home() {
    return (
        <main className={styles.main}>
            <TopNavbar />
            <BlogForm />
        </main>
    )
}
