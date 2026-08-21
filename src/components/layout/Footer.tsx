import { profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <p>{profile.name} — Portfolio V2 foundation.</p>
      </div>
    </footer>
  );
}

