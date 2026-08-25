import { useState, type CSSProperties } from 'react';
import { sitePath } from '../../utils/paths';

type RailItemType = 'credential' | 'standard';
type LogoPresentation = 'image' | 'currentColor' | 'trimmedWide';

interface CredentialLogoVariants {
  default: string;
  light?: string;
  dark?: string;
  presentation?: LogoPresentation;
  surface?: boolean;
}

interface CredentialRailItem {
  name: string;
  detail: string;
  type: RailItemType;
  logos?: CredentialLogoVariants;
}

const personalCredentials: CredentialRailItem[] = [
  {
    name: 'ISACA',
    detail: 'CISA',
    type: 'credential',
    logos: { default: 'credentials/isaca-seeklogo.svg', presentation: 'trimmedWide', surface: true },
  },
  {
    name: 'SISA',
    detail: 'CPISI Advanced',
    type: 'credential',
    logos: { default: 'credentials/sisa.svg', presentation: 'currentColor' },
  },
  { name: 'CompTIA', detail: 'Security+', type: 'credential', logos: { default: 'credentials/comptia.svg' } },
  {
    name: 'PeopleCert',
    detail: 'ITIL 4',
    type: 'credential',
    logos: { default: 'credentials/peoplecert.svg', surface: true },
  },
  {
    name: 'Microsoft',
    detail: 'MCSA · MCSD',
    type: 'credential',
    logos: { default: 'credentials/microsoft.svg', presentation: 'trimmedWide', surface: true },
  },
];

const standardsExperience: CredentialRailItem[] = [
  { name: 'PCI DSS', detail: 'PCI DSS', type: 'standard' },
  {
    name: 'ISO 27001',
    detail: 'ISO 27001',
    type: 'standard',
    logos: { default: 'credentials/iso-27001.svg' },
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
            className="credential-logo credential-logo--current-color"
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
            className={`credential-logo-frame${logo.surface ? ' credential-logo-frame--surface' : ''}`}
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
        className={`credential-logo${logo.surface ? ' credential-logo--surface' : ''}${status === 'loaded' ? ' is-loaded' : ' credential-logo--pending'}`}
        src={logoPath}
        onError={() => setStatus('failed')}
        onLoad={() => setStatus('loaded')}
      />
    </>
  );
}

function CredentialGroup({
  isDuplicate,
  items,
  title,
  type,
}: {
  isDuplicate: boolean;
  items: CredentialRailItem[];
  title: string;
  type: RailItemType;
}) {
  const headingId = isDuplicate ? undefined : `credential-group-${type}`;

  return (
    <section className={`credential-group credential-group--${type}`} aria-labelledby={headingId}>
      <h3 className="credential-group-label" id={headingId}>{title}</h3>
      <ul className="credential-group-items">
        {items.map((item) => (
          <li className={`credential-issuer credential-issuer--${item.type}`} key={item.name}>
            <CredentialLogo item={item} />
            <span className="credential-mapping">{item.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CredentialSet({ isDuplicate = false }: { isDuplicate?: boolean }) {
  return (
    <div
      aria-hidden={isDuplicate ? 'true' : undefined}
      className={`credential-issuer-set${isDuplicate ? ' credential-issuer-set--duplicate' : ''}`}
    >
      <CredentialGroup
        isDuplicate={isDuplicate}
        items={personalCredentials}
        title="Personal credentials"
        type="credential"
      />
      <CredentialGroup
        isDuplicate={isDuplicate}
        items={standardsExperience}
        title="Standards experience"
        type="standard"
      />
    </div>
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
    </section>
  );
}
