import Link from "next/link";
import {
  formatLegalDate,
  operatorName,
  site,
  type LegalPage as LegalPageKey,
} from "@/config/site";
import { SiteHeader, SiteFooter } from "./site-chrome";

export function OperatorContact() {
  return (
    <div className="legal-contact">
      <dl>
        <div>
          <dt>Operator</dt>
          <dd>{operatorName}</dd>
        </div>
        {site.developer.publicName && (
          <div>
            <dt>Developer</dt>
            <dd>{site.developer.publicName}</dd>
          </div>
        )}
        <div>
          <dt>Country</dt>
          <dd>{site.developer.country || "Awaiting operator confirmation"}</dd>
        </div>
        <div>
          <dt>Contact</dt>
          <dd>
            {site.developer.contactEmail ? (
              <a href={`mailto:${site.developer.contactEmail}`}>
                {site.developer.contactEmail}
              </a>
            ) : (
              "A public contact email has not yet been provided."
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export function LegalPage({
  page,
  introduction,
  children,
}: {
  page: LegalPageKey;
  introduction: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="container legal-main">
        <div className="legal-heading">
          <p className="eyebrow">{site.name.toUpperCase()} · INFORMATION</p>
          <h1>{site.pages[page].title}</h1>
          <p>{introduction}</p>
          <div className="legal-dates">
            <span>
              Effective date: {formatLegalDate(site.legal.effectiveDates[page])}
            </span>
            <span>
              Last reviewed: {formatLegalDate(site.legal.lastReviewed)}
            </span>
          </div>
        </div>
        {site.legal.reviewRequired && (
          <aside className="legal-review" aria-label="Operator review status">
            <strong>Prepared for operator and legal review.</strong> The content
            below describes the current app and website. Operator details,
            effective dates, applicable law, hosting practices, and content
            permissions still require confirmation. This notice remains visible
            until that review is completed.
          </aside>
        )}
        <nav className="legal-navigation" aria-label="Related information">
          {site.legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.href === `/${page}` ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/">Back to Essential Words</Link>
        </nav>
        <article className="legal-content">{children}</article>
      </main>
      <SiteFooter />
    </>
  );
}
