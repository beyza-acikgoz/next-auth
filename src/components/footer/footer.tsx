import styles from './footer.module.css';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaPinterest, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Divider çizgisi */}
      <div className={styles.divider}></div>

      {/* Beyza Kilim */}
      <div className={styles.section}>
        <h4>Beyza Kilim</h4>
        <p>
          Anadolu'nun ruhunu yansıtan el yapımı kilimler ve halılar. Gelenekten ilham, zamansız desenler.
        </p>
      </div>

      {/* Sayfalar */}
      <div className={styles.section}>
        <h4>Sayfalar</h4>
        <div className={styles.links}>
          <Link href="/">Ana Sayfa</Link>
          <Link href="/shop">Mağaza</Link>
          <Link href="/about">Hakkımızda</Link>
          <Link href="/contact">İletişim</Link>
          <Link href="/faq">SSS</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>

      {/* Dropshipping */}
      <div className={styles.section}>
        <h4>Dropshipping</h4>
        <div className={styles.links}>
          <Link href="/dropshipping">Nasıl Çalışır?</Link>
          <Link href="/dropshipping#form">Başvuru Formu</Link>
          <Link href="/dropshipping#sss">Sık Sorulanlar</Link>
        </div>
      </div>

      {/* Sosyal Medya */}
      <div className={styles.section}>
        <h4>Sosyal Medya</h4>
        <div className={styles.socials}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
          <a href="https://wa.me/90xxxxxxxxxx" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Telif Hakkı ve Politikalar */}
      <div className={styles.bottomLine}>
        © {new Date().getFullYear()} Beyza Kilim. Tüm hakları saklıdır. <br />
        <Link href="/privacy">Gizlilik Politikası</Link> | <Link href="/terms">Kullanım Şartları</Link>
      </div>
    </footer>
  );
};

export default Footer;
