import React from 'react';
import styles from '/public/css/HeaderSection.module.css'; // Correctly import the module CSS
import Link from 'next/link';

const header = () => {
  return (
    <>
      <div id="header">
              <div className={styles.container}>
                  <div>
                      <div className={styles.title}>
                          Shine Hub
                      </div>
                  </div>

                  <div>
                      <p className={styles.description}>
                          Serverside Cheat
                      </p>
                  </div>

                  <div>
                      <Link href="https://www.roblox.com/games/130598425851860/unnamed" target="_blank" rel="noopener noreferrer" className={styles.btn}>
                          Purchase
                      </Link>
                  </div>
              </div>
          </div></>
  );
};

export default header;
