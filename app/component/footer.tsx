import Image from 'next/image';
import Link from 'next/link';
import styles from '/public/css/Footer.module.css'; // Correctly import the module CSS

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <span className={styles.logoText}>Merry Christmas</span>
      </div>
      <div className={styles.footerLinks}>

        <Link href="/privacy-policy" className={styles.footerLink}>
          Privacy Policy
        </Link>
      </div>
      <div className={styles.footerText}>
        © 2024 Shine Hub. All Rights Reserved. Unauthorized copying or reproduction
        of this website's content, code, or assets is strictly prohibited.
      </div>
    </div>
  );
}
