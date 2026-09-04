import { useState, type CSSProperties } from 'react';
import { sitePath } from '../../utils/paths';

type LogoPresentation = 'image' | 'currentColor' | 'trimmedWide';

interface CredentialLogoVariants {
  default: string;
  light?: string;
  dark?: string;
  presentation?: LogoPresentation;
}

interface CredentialRailItem {
  name: string;
  detail: string;
  logos?: CredentialLogoVariants;
  visualId?: string;
}

const personalCredentials: CredentialRailItem[] = [
  {
    name: 'ISACA',
    detail: 'CISA',
    logos: { default: 'credentials/isaca-seeklogo.svg', presentation: 'currentColor' },
    visualId: 'isaca',
  },
  {
    name: 'SISA',
    detail: 'CPISI Advanced',
    logos: { default: 'credentials/sisa.svg', presentation: 'currentColor' },
  },
  { name: 'CompTIA', detail: 'Security+', logos: { default: 'credentials/comptia.svg' } },
  {
    name: 'PeopleCert',
    detail: 'ITIL 4',
    logos: { default: 'credentials/peoplecert.svg', presentation: 'currentColor' },
    visualId: 'peoplecert',
  },
  {
    name: 'Microsoft',
    detail: 'MCSA · MCSD',
    logos: { default: 'credentials/microsoft.svg', presentation: 'trimmedWide' },
  },
];

const standardsExperience: CredentialRailItem[] = [
  { name: 'PCI DSS', detail: 'PCI DSS', logos: { default: 'credentials/pci-dss.svg' } },
  {
    name: 'ISO 27001',
    detail: 'ISO 27001',
    logos: { default: 'credentials/iso-27001-transparent.svg' },
  },
];

interface LogoMaskStyle extends CSSProperties {
  '--credential-logo-source': string;
}

function TextFallback({ name }: { name: string }) {
  return <span className="credential-issuer-name">{name}</span>;
}

function CredentialLogo({ item }: { item: CredentialRailItem }) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'failed'>('loading');
  const logo = item.logos;

  if (!logo || status === 'failed') {
    return <TextFallback name={item.name} />;
  }

  const logoPath = sitePath(logo.default);

  if (logo.presentation === 'currentColor') {
    const maskStyle = {
      '--credential-logo-source': `url("${logoPath}")`,
    } as LogoMaskStyle;

    return (
      <>
        {status === 'loading' ? (
          <TextFallback name={item.name} />
        ) : (
          <span
            aria-label={item.name}
            className={`credential-logo credential-logo--current-color${item.visualId ? ` credential-logo--${item.visualId}` : ''}`}
            role="img"
            style={maskStyle}
          />
        )}
        {status === 'loading' && (
          <img
            alt=""
            className="credential-logo credential-logo--pending"
            src={logoPath}
            onError={() => setStatus('failed')}
            onLoad={() => setStatus('loaded')}
          />
        )}
      </>
    );
  }

  if (logo.presentation === 'trimmedWide') {
    return (
      <>
        {status === 'loading' ? (
          <TextFallback name={item.name} />
        ) : (
          <span
            aria-label={item.name}
            className="credential-logo-frame"
            role="img"
          >
            <img
              alt=""
              className="credential-logo credential-logo--trimmed-wide"
              src={logoPath}
              onError={() => setStatus('failed')}
            />
          </span>
        )}
        {status === 'loading' && (
          <img
            alt=""
            className="credential-logo credential-logo--pending"
            src={logoPath}
            onError={() => setStatus('failed')}
            onLoad={() => setStatus('loaded')}
          />
        )}
      </>
    );
  }

  return (
    <>
      {status === 'loading' && <TextFallback name={item.name} />}
      <img
        alt={status === 'loaded' ? item.name : ''}
        className={`credential-logo${status === 'loaded' ? ' is-loaded' : ' credential-logo--pending'}`}
        src={logoPath}
        onError={() => setStatus('failed')}
        onLoad={() => setStatus('loaded')}
      />
    </>
  );
}

function CredentialSet({ isDuplicate = false }: { isDuplicate?: boolean }) {
  return (
    <ul
      aria-hidden={isDuplicate ? 'true' : undefined}
      className={`credential-issuer-set${isDuplicate ? ' credential-issuer-set--duplicate' : ''}`}
    >
      {personalCredentials.map((item) => (
        <li
          className={`credential-issuer${item.visualId ? ` credential-issuer--${item.visualId}` : ''}`}
          key={item.name}
        >
          <CredentialLogo item={item} />
          <span className="credential-mapping">{item.detail}</span>
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
          <CredentialSet />
          <CredentialSet isDuplicate />
        </div>
      </div>
      <div className="site-container standards-wrap">
        <section className="standards-experience" aria-labelledby="standards-experience-title">
          <h3 id="standards-experience-title">Standards experience</h3>
          <ul>
            {standardsExperience.map((item) => (
              <li key={item.name}>
                <CredentialLogo item={item} />
                {item.logos && <span className="standard-name">{item.detail}</span>}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
