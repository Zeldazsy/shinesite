import Link from 'next/link';
import "/public/css/main.css";
import map from '../public/items/map';
import feature from '../public/items/features';
import dev from '../public/items/dev';
import { JSX } from 'react';

interface SectionProps {
  title: string;
  items: (string | JSX.Element)[];
}

export default function Home() {
  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">Shine Hub</h1>

        <p className="description">
          <strong>"Lorem ipsum"</strong> dolor sit amet, consectetur adipiscing elit.
        </p>

        <hr />

        <div className="content-section">
          <Section title="Map" items={map} />
          <Section title="Features" items={feature} />
          <Section title="Developer" items={dev} />
        </div>
      </div>

      <div className="actions">
        <Link href="https://www.roblox.com/games/130598425851860/unnamed" target="_blank" rel="noopener noreferrer" className="btn">
          Purchase
        </Link>
      </div>

      <footer className="footer">© 2024 Shine Hub</footer>

      <div className="other">
      Join Our{" "}
        <Link href="https://discord.gg/8zpY9PC4D8" target="_blank" rel="noopener noreferrer" className="linktext">
           Discord
        </Link>
      </div>
    </div>
  );
}

function Section({ title, items }: SectionProps) {
  return (
    <section className="content-section">
      <h2 className="section-title">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}