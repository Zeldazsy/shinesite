import Link from 'next/link';
import "../public/css/main.css";

export default function TermsPage() {

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">Shine Hub</h1>
        <Link href="https://discord.gg/8zpY9PC4D8" className="contect">
        <svg fill="#3a5f77" width="100px" height="100px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
</Link>

        <p className="description">
          <strong>&quot;Shine Hub&quot;</strong> is a bababa
        </p>
        <hr />

        <div className="content-section">
          <section>
            <h2 className="section-title">Map</h2>
            <ul>
              <li>Freefire</li>
              <li>Freefire max</li>
            </ul>
          </section>

          <section>
            <h2 className="section-title">Features</h2>
            <ul>
              <li>bababa</li>

            </ul>
          </section>

          <section>
            <h2 className="section-title">Developer</h2>
            <ul>
              <li>
                Zelda(
                <Link
                  href="https://discord.com/users/1226056039904972831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="discord-link"
                >
                  1226056039904972831
                </Link>
                )
              </li>
              <li>
                sunnd4y(
                <Link
                  href="https://discord.com/users/946692470580854814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="discord-link"
                >
                  946692470580854814
                </Link>
                )
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div>

          <Link
            href="https://www.roblox.com/games/130598425851860/unnamed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Purchase
          </Link>
      </div>

      <footer className="footer">© 2024 Shine Hub</footer>
    </div>
  );
}
