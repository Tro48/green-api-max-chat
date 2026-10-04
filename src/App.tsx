import styles from './App.module.css'

export default function App() {
  return (
    <main className={styles.app}>
      <section className={styles.card}>
        <h1 className={styles.title}>MAX Chat</h1>
        <p className={styles.subtitle}>
          Каркас проекта: интерфейс чата для мессенджера MAX через GREEN-API.
        </p>
      </section>
    </main>
  )
}
