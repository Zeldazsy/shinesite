'use client';
import Image from 'next/image';
import styles from '/public/css/TeamSection.module.css';
import teamMembers from './members';

// Define the props explicitly for the component
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const TeamMember = ({ name, role, image, description }: TeamMemberProps) => (
  <div className={styles.teamMember}>
    <div className={styles.teamMemberImage}>
      <Image src={image} alt={name} width={112} height={112} />
    </div>
    <h3 className={styles.teamMemberName}>{name}</h3>
    <span className={styles.teamMemberRole}>{role}</span>
    <div className={styles.teamMemberDescription}>{description}</div>
  </div>
);

const TeamSection = () => (
    <div className={styles.container}>

  <section id="team" className={styles.teamSection}>
    <div className={styles.teamHeader}>
      <div className={styles.teamHeaderBadge}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.teamIcon}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <span>MEET THE DEV</span>
      </div>
      <h2>
        The Minds Behind <span className={styles.teamHighlight}>Shine</span>
      </h2>
      <p className={styles.teamDescription}>Our dedicated team works tirelessly to bring you the most advanced and reliable scripting solutions.</p>
    </div>
    <div className={styles.teamGrid}>
      {teamMembers.map((member) => (
        <TeamMember key={member.name} {...member} />
      ))}
    </div>
  </section>
  </div>

);

export default TeamSection;
