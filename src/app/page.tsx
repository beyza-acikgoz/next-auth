"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/logo.jpg"
          alt="Beyza logo"
          width={472}
          height={132}
        />
        <ol>
          <li>Gelenekten İlham, Zamansız Desenler.</li>
          <li>Beyza Kilim olarak Anadolu’nun zengin motif mirasını evinize taşıyoruz.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            onClick={() => router.push("/shop")}
          >
            🛒 Alışverişe Başla
          </a>
          <a
            className={styles.secondary}
            onClick={() => router.push("/dropshipping")}
          >
            📦 Dropshipping’e Katıl
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          onClick={() => router.push("/about")}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Hakkımızda
        </a>
        <a
          onClick={() => router.push("/branches")}
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Şubelerimiz
        </a>
        <a
          onClick={() => router.push("/contact")}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          İletişim →
        </a>
      </footer>
    </div>
  );
}
