import styles from '/public/css/about.module.css'; // Correctly import the module CSS

// Define types for the props
interface StatCardProps {
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, description }) => (
  <div className={styles.statCard}>
    <div className={styles.gradientOverlay}></div>
    <div className={styles.statValue}>{value}</div>
    <div className={styles.statDescription}>{description}</div>
  </div>
);

const About = () => {
  return (
    <div className={styles.container}>

    <div id="about" className={styles.about}>
      <div className={styles.aboutHeader}>
        <div className={styles.badge}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <span className={styles.badgeText}>ABOUT US</span>
        </div>
        <div className={styles.title}>
          Why Choose <span>Shine?</span>
        </div>
        <p className={styles.aboutDescription}>
        Our server-side solution is built for maximum reliability and performance. We continuously optimize the server infrastructure to ensure seamless operation and minimize downtime, keeping you ahead with fast and stable services.
</p>
      </div>
      <div className={styles.stats}>
        <StatCard value="0" description="Active Users" />
        <StatCard value="1/2" description="Support" />
        <StatCard value="0.1%" description="Uptime" />
        <StatCard value="0.2/5" description="User Rating" />
      </div>
      </div>
    </div>
  );
};

export default About;
