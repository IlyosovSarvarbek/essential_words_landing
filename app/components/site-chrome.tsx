import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

function Wordmark() {
  return (
    <span>
      {site.brand.first}
      <span className="brand-light">{site.brand.second}</span>
      <span className="brand-period">{site.brand.punctuation}</span>
    </span>
  );
}

export function SiteHeader({ home = false }: { home?: boolean }) {
  const prefix = home ? "" : "/";
  const HomeLink = home ? "a" : Link;
  return (
    <header className="site-header">
      <div className="container header-inner">
        <HomeLink
          className="brand"
          href={home ? "#" : "/"}
          aria-label={`${site.name} home`}
        >
          <Image src={site.brand.icon} alt="" width={43} height={43} />
          <Wordmark />
        </HomeLink>
        <nav aria-label="Main navigation">
          {site.navigation.map((link) => (
            <HomeLink key={link.href} href={`${prefix}${link.href}`}>
              {link.label}
            </HomeLink>
          ))}
        </nav>
        <HomeLink
          className="button button-small button-outline"
          href={`${prefix}#try-it`}
        >
          Try a flashcard
        </HomeLink>
      </div>
    </header>
  );
}

export function SiteFooter({ home = false }: { home?: boolean }) {
  const HomeLink = home ? "a" : Link;
  return (
    <footer className="site-footer container">
      <HomeLink className="brand footer-brand" href={home ? "#" : "/"}>
        <Image src={site.brand.icon} alt="" width={32} height={32} />
        <Wordmark />
      </HomeLink>
      <p>{site.tagline}</p>
      <HomeLink href={`${home ? "" : "/"}#faq`}>Questions &amp; answers</HomeLink>
      <nav className="footer-legal-links" aria-label="Legal and attribution">
        {site.legalLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        {site.urls.flutterWebApp && (
          <a href={site.urls.flutterWebApp}>Open app</a>
        )}
        {site.urls.androidApk && (
          <a href={site.urls.androidApk}>Download APK</a>
        )}
        {site.urls.github && <a href={site.urls.github}>GitHub</a>}
      </nav>
      <span>
        © {site.legal.copyrightYear} {site.name}
      </span>
    </footer>
  );
}
