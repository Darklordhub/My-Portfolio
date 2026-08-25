import { sitePath } from '../../utils/paths';

interface CredentialIssuer {
  name: string;
  credentials: string;
  logoPath?: string;
}

const credentialIssuers: CredentialIssuer[] = [
  { name: 'ISACA', credentials: 'CISA' },
  { name: 'SISA', credentials: 'CPISI Advanced' },
  { name: 'CompTIA', credentials: 'Security+' },
  { name: 'PeopleCert', credentials: 'ITIL 4' },
  { name: 'Microsoft', credentials: 'MCSA · MCSD' },
];

function IssuerSet({ isDuplicate = false }: { isDuplicate?: boolean }) {
  return (
    <ul
      aria-hidden={isDuplicate ? 'true' : undefined}
      className={`credential-issuer-set${isDuplicate ? ' credential-issuer-set--duplicate' : ''}`}
    >
      {credentialIssuers.map((issuer) => (
        <li className="credential-issuer" key={`${isDuplicate ? 'duplicate-' : ''}${issuer.name}`}>
          {issuer.logoPath ? (
            <img alt={issuer.name} src={sitePath(issuer.logoPath)} />
          ) : (
            <span className="credential-issuer-name">{issuer.name}</span>
          )}
          <span className="credential-mapping">{issuer.credentials}</span>
        </li>
      ))}
    </ul>
  );
}

export function CredentialRail() {
  return (
    <section className="credential-rail" aria-labelledby="credential-rail-title">
      <div className="site-container credential-rail-heading">
        <h2 className="chapter-label" id="credential-rail-title">Credentials</h2>
      </div>
      <div className="credential-marquee">
        <div className="credential-track">
          <IssuerSet />
          <IssuerSet isDuplicate />
        </div>
      </div>
    </section>
  );
}
