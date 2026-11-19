import Link from "next/link";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage, OperatorContact } from "../components/legal-page";

export const metadata = pageMetadata(
  site.pages.terms.title,
  site.pages.terms.description,
  "/terms",
);

export default function Terms() {
  return (
    <LegalPage
      page="terms"
      introduction={`These terms describe the conditions for using the ${site.name} application and this website, including the learning sample.`}
    >
      <section>
        <h2>1. About the service and these terms</h2>
        <p>
          {site.name} is an independently developed English–Uzbek vocabulary
          learning app. It provides a six-book vocabulary library, word review,
          flashcards, quizzes, dictionary search, device-based pronunciation,
          and local learning progress. This website introduces the app and
          provides a limited interactive sample.
        </p>
        <p>
          The operator details appear below. Read these terms and the{" "}
          <Link href="/privacy">Privacy Policy</Link> before using the service.
          Once the operator confirms an effective date, use of the service is
          subject to these terms to the extent permitted by applicable law. The
          review notice above identifies details still awaiting confirmation.
        </p>
        <OperatorContact />
      </section>
      <section>
        <h2>2. Using the app</h2>
        <p>
          You may use the app and website for your own vocabulary study, subject
          to these terms, any applicable software licenses, and the rights of
          content owners. No account is currently required. You are responsible
          for using a compatible device, obtaining the app from a source you
          trust, and complying with the rules that apply to you. If you cannot
          independently agree to these terms under the law that applies to you,
          involve a parent or guardian.
        </p>
        <p>
          Do not interfere with the service, introduce malicious code, misuse
          another person’s device or data, attempt unauthorized access to
          hosting systems, or bypass technical protections. These terms do not
          restrict activities that applicable law expressly permits.
        </p>
      </section>
      <section>
        <h2>3. Educational content and intellectual property</h2>
        <p>
          The app uses content associated with{" "}
          <cite>{site.textbook.title}</cite> by {site.textbook.author},
          published by {site.textbook.publisher}. The app’s software, branding,
          vocabulary selection, translations, and other materials may have
          different rights holders. See{" "}
          <Link href="/credits">Credits and Attribution</Link> for
          acknowledgments and the status of content permissions.
        </p>
        <p>
          Acknowledging a source does not grant permission to reproduce, adapt,
          translate, or distribute protected material. No general license to
          republish the textbook content or the app’s vocabulary collection is
          granted by these terms. Any permission for your use must come from the
          relevant rights holder or an applicable legal exception. Third-party
          software and fonts remain subject to their own licenses.
        </p>
        <p>{site.textbook.affiliation}</p>
      </section>
      <section>
        <h2>4. Learning results and pronunciation</h2>
        <p>
          The service supports practice; it does not promise fluency,
          examination results, a particular learning speed, or error-free
          translations. Check important meanings and spellings against reliable
          language references. Quiz scores reflect a particular attempt and do
          not certify proficiency.
        </p>
        <p>
          Pronunciation uses the device or browser’s English text-to-speech
          service. Availability, voice quality, and network use depend on that
          service and installed voices. An offline voice is needed for offline
          pronunciation. The Flutter app currently has no Linux pronunciation
          implementation.
        </p>
      </section>
      <section>
        <h2>5. Your locally stored progress</h2>
        <p>
          Learned-word status, theme settings, and quiz attempts are stored
          locally. There is no account-based cloud synchronization or backup
          service in the current app. Device loss, clearing application or
          browser data, changing the web origin, storage restrictions, or
          removal of the app can make that information unavailable. The website
          sample keeps its state only in memory and is separate from the app.
        </p>
        <p>
          You choose which words to mark learned. Quiz scores do not
          automatically change learned-word progress. Do not rely on the service
          as the sole record of important information.
        </p>
      </section>
      <section>
        <h2>6. Availability, downloads, and external services</h2>
        <p>
          Features can vary by platform and may be updated, interrupted, or
          discontinued. Core study features work with bundled vocabulary; a
          network connection may be required to load the website, obtain an
          update, or use a network-backed speech voice. External websites,
          software repositories, downloads, operating-system services, and
          hosting providers may have their own terms and privacy practices.
        </p>
        <p>
          No store availability, price, subscription, support period, or
          official publisher relationship is promised by this page. Links are
          offered only when a verified destination has been configured.
        </p>
      </section>
      <section>
        <h2>7. Warranties and responsibility</h2>
        <p>
          To the extent allowed by applicable law, the app and website are
          provided as available, without a promise of uninterrupted operation,
          perfect accuracy, compatibility with every device, or preservation of
          local data. Take reasonable steps to protect your device and data.
        </p>
        <p>
          Nothing in these terms excludes liability that cannot lawfully be
          excluded, limits mandatory consumer rights, or removes rights you have
          under applicable privacy, intellectual-property, or other law. Any
          additional limitation of liability or allocation of risk requires
          jurisdiction-specific review; these terms do not invent a financial
          liability cap.
        </p>
      </section>
      <section>
        <h2>8. Stopping use and changes</h2>
        <p>
          You may stop using the website at any time and remove the app from
          your device. Local app data may remain in device backups or browser
          storage until you remove it using the relevant controls. See the{" "}
          <Link href="/privacy">Privacy Policy</Link> for details.
        </p>
        <p>
          Material changes to these terms should be accompanied by an updated
          effective date and a notice on the website. Changes will not override
          rights that applicable law protects. A later version of the service
          may require revised terms if its functionality or data practices
          change.
        </p>
      </section>
      <section>
        <h2>9. Applicable law and questions</h2>
        <p>
          {site.legal.governingLaw
            ? `The operator’s stated governing-law provision is: ${site.legal.governingLaw}. This does not remove mandatory protections or access to courts available under the law that applies to you.`
            : "The operator’s country and any governing-law provision have not yet been confirmed. No particular jurisdiction, exclusive court, or mandatory arbitration agreement is imposed by this draft. Applicable mandatory law continues to apply."}
        </p>
        <p>
          For questions, errors, accessibility issues, or rights concerns, use
          the operator contact above once it is provided. Do not send sensitive
          personal information through a public issue tracker. Copyright
          concerns should identify the material, its location, the rights
          claimed, and a way to contact you.
        </p>
      </section>
    </LegalPage>
  );
}
