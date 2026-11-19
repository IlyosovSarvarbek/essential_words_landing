import Link from "next/link";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage, OperatorContact } from "../components/legal-page";

export const metadata = pageMetadata(
  site.pages.credits.title,
  site.pages.credits.description,
  "/credits",
);

export default function Credits() {
  return (
    <LegalPage
      page="credits"
      introduction={`Acknowledgments for the learning content, software, fonts, and original app materials used in ${site.name}.`}
    >
      <section>
        <h2>1. Textbook acknowledgment</h2>
        <p>
          {site.name} uses vocabulary content associated with the{" "}
          <cite>{site.textbook.title}</cite> series by{" "}
          <strong>{site.textbook.author}</strong>, published by{" "}
          <strong>{site.textbook.publisher}</strong>. We acknowledge the author
          and publisher of the original series. The original textbook title and
          the independently developed app name refer to different products.
        </p>
        <p>
          See the{" "}
          <a href={site.textbook.sourceUrl} rel="external">
            publisher’s official series listing
          </a>{" "}
          for the original publication, and{" "}
          <a href={site.textbook.publisherUrl} rel="external">
            {site.textbook.publisher}
          </a>{" "}
          for publisher information. The app’s verified library contains{" "}
          {site.collection.entries.toLocaleString("en-US")} vocabulary entries;
          the title of the textbook series does not imply that this app contains
          4,000 entries or all textbook materials.
        </p>
        <p>{site.textbook.affiliation}</p>
      </section>
      <section>
        <h2>2. Content rights and permission status</h2>
        <p>
          Textbook material, editorial selection or arrangement, translations,
          illustrations, audio, names, and trademarks may be protected by
          copyright or other rights. Ownership remains with the relevant rights
          holders. This acknowledgment does not grant the developer or users
          permission to reproduce, adapt, translate, distribute, or publicly
          make available protected material.
        </p>
        <div className="legal-review">
          <strong>
            Permission status:{" "}
            {site.legal.copyrightPermissionStatus === "confirmed" &&
            site.legal.copyrightPermissionDetails
              ? "Operator-provided permission information"
              : "not verified"}
            .
          </strong>{" "}
          {site.legal.copyrightPermissionStatus === "confirmed" &&
          site.legal.copyrightPermissionDetails
            ? site.legal.copyrightPermissionDetails
            : "No redistribution license or written permission covering the bundled textbook-related content has been verified for this project. The operator must establish the rights or applicable legal basis for the content, translations, app distribution, screenshots, and website samples before public distribution. Attribution alone does not resolve this."}
        </div>
        <p>
          Do not assume that educational intent, a free download, public access
          to a word list, or acknowledgment removes the need to review
          permission. Applicable exceptions vary by jurisdiction and intended
          use. Consult qualified counsel or the rights holder when the basis is
          uncertain. General background is available in{" "}
          <a href={site.textbook.copyrightGuidanceUrl} rel="external">
            WIPO’s copyright questions and answers
          </a>
          .
        </p>
      </section>
      <section>
        <h2>3. Uzbek translations and app materials</h2>
        <p>
          {site.legal.translationCredits ||
            "The app includes Uzbek translations bundled with its vocabulary data. The translator identity, source, and redistribution terms have not yet been confirmed. No translation authorship or license is claimed here; the operator must verify these details and add the appropriate credit."}
        </p>
        <p>
          The website uses the existing app’s blue book icon and nine original
          app screenshots supplied in the Flutter repository. Screenshots are
          delivered as optimized WebP files without changing their contents. The
          interactive sample uses five entries from Book 1, Unit 1. These
          materials are acknowledgments of the project assets, not a
          representation that rights to every depicted item have been cleared.
        </p>
      </section>
      <section>
        <h2>4. Software and fonts</h2>
        <p>
          The app is built with Flutter and Dart and uses Material components,
          Lucide icons, platform text-to-speech, and the sqflite family of
          SQLite adapters. Shared preferences support migration from older local
          storage. Those projects and dependencies remain subject to their own
          license notices. This page does not replace the notices required in a
          distributed application.
        </p>
        <p>
          The website uses Next.js, React, GSAP, ScrollTrigger, and the GSAP
          React integration. They are used under their respective package
          licenses. GSAP is locally bundled; the animation integration is not an
          analytics service.
        </p>
        <p>
          Roboto font files are bundled with the project together with their{" "}
          <a href="/fonts/roboto_license.txt">Apache License 2.0 notice</a>. The
          Flutter app also bundles Noto Sans Symbols under the SIL Open Font
          License; that font is not distributed by this website. The website’s
          interface icons are simple project SVG line drawings; Flutter’s icon
          dependency is separately licensed. No publisher audio or book-cover
          artwork is presented as an original app asset.
        </p>
      </section>
      <section>
        <h2>5. Independent development and contact</h2>
        <p>
          The operator’s public developer details are listed below. An empty
          configuration field is not an attribution to an unknown author or an
          implied relationship with a publisher.
        </p>
        <OperatorContact />
        <p>
          If you are a rights holder and have a concern, contact the operator
          with the material’s location, the rights involved, and your preferred
          contact details once the public contact address is supplied. This page
          does not create a particular statutory notice-and-takedown procedure
          or promise a fixed response deadline.
        </p>
        {site.urls.github && (
          <p>
            Project information:{" "}
            <a href={site.urls.github} rel="external">
              public source repository
            </a>
            . A public repository does not by itself grant permission to use
            textbook-related content.
          </p>
        )}
        <p>
          See also the <Link href="/terms">Terms of Service</Link>,{" "}
          <Link href="/privacy">Privacy Policy</Link>, or{" "}
          <Link href="/">return to the learning website</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
