import Link from "next/link";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage, OperatorContact } from "../components/legal-page";

export const metadata = pageMetadata(
  site.pages.privacy.title,
  site.pages.privacy.description,
  "/privacy",
);

export default function Privacy() {
  return (
    <LegalPage
      page="privacy"
      introduction={`This policy separates information kept on your device by ${site.name} from information involved in visiting this website or using a speech service.`}
    >
      <section>
        <h2>1. Who is responsible and what this covers</h2>
        <p>
          This policy covers the current {site.name} Flutter application and
          this Next.js website, including its five-word learning sample. It is
          based on the app’s current storage and speech implementation and the
          website’s current functionality. A separately hosted app, app store,
          browser, operating system, or speech provider may process information
          under its own policy. The operator must confirm deployment-specific
          practices before publication.
        </p>
        <OperatorContact />
      </section>
      <section>
        <h2>2. Learning information stored on your device</h2>
        <p>
          The app does not require you to create an account or provide your
          name, email address, or a profile to study. It stores the following
          learning information locally:
        </p>
        <div className="legal-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Information</th>
                <th scope="col">Purpose</th>
                <th scope="col">Storage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identifiers of words marked learned</td>
                <td>
                  Show learned status and unit, book, and library progress
                </td>
                <td>Local SQLite database</td>
              </tr>
              <tr>
                <td>Theme preference</td>
                <td>Restore your light, dark, or saved system theme setting</td>
                <td>Local SQLite database</td>
              </tr>
              <tr>
                <td>
                  Completed quiz attempts: book, unit, direction, score, total,
                  completion timestamp
                </td>
                <td>Record your completed attempts</td>
                <td>Local SQLite database</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          On the web, SQLite runs in a worker and persists through browser
          IndexedDB for the app’s origin. Native desktop and mobile builds use
          local database storage. The app loads up to 100 recent quiz results
          into memory; older results remain in the database. That memory limit
          is not a deletion or retention limit.
        </p>
        <p>
          Older installations can import learned words, theme settings, and quiz
          history from preferences storage. The migration retains the original
          preferences. Searches and uncompleted quiz selections are held in the
          active interface; the inspected app has no search-history upload or
          synchronization feature.
        </p>
      </section>
      <section>
        <h2>3. This website and its learning sample</h2>
        <p>
          The website sample holds card position, learned selections, quiz
          answers, and scores in browser memory. It does not save them to
          cookies, localStorage, IndexedDB, or the Flutter app’s database.
          Reloading or leaving the sample discards its state. It does not
          synchronize with your app progress.
        </p>
        <p>
          The current website includes no account registration, contact form,
          advertising tracker, analytics integration, or first-party tracking
          cookie. Fonts, screenshots, and animation code are served with the
          website. This describes the current implementation; it does not mean
          that a hosting provider receives no technical information.
        </p>
      </section>
      <section>
        <h2>4. Hosting and technical request information</h2>
        <p>
          Loading any hosted website sends technical request information to the
          hosting or delivery infrastructure. This can include your IP address,
          requested path, request time, browser headers, user agent, and
          referrer when your browser sends one. Providers may use request
          information to deliver content, protect the service, investigate
          failures, and operate their infrastructure. The operator has not yet
          confirmed which request fields are logged, access arrangements,
          processing regions, or retention settings.
        </p>
        <dl className="legal-provider-details">
          <div>
            <dt>Hosting/CDN provider</dt>
            <dd>
              {site.legal.hostingProvider ||
                "Not yet confirmed by the operator"}
            </dd>
          </div>
          <div>
            <dt>Processing regions</dt>
            <dd>
              {site.legal.hostingRegion || "Not yet confirmed by the operator"}
            </dd>
          </div>
          <div>
            <dt>Log retention</dt>
            <dd>
              {site.legal.hostingLogRetention ||
                "Not yet confirmed by the operator"}
            </dd>
          </div>
        </dl>
        <p>
          These fields must be checked against the actual deployment. The
          website cannot promise a specific logging retention period, hosting
          country, or transfer arrangement before that information is known.
        </p>
      </section>
      <section>
        <h2>5. Pronunciation and speech services</h2>
        <p>
          When you request pronunciation, the app passes the selected English
          word to the platform’s text-to-speech service; the website sample
          passes it to your browser’s speech service. Neither feature records
          your voice or requires microphone access.
        </p>
        <p>
          Some voices run entirely on your device, while others may send the
          text and technical request information to the speech provider. Its
          processing and retention practices are governed by that provider’s
          terms and settings. Install and select an offline English voice if you
          want offline pronunciation where supported. The developer cannot
          guarantee that every available voice is local. The Flutter app
          currently has no Linux pronunciation implementation.
        </p>
      </section>
      <section>
        <h2>6. Sharing, advertising, and communications</h2>
        <p>
          The inspected app contains no account server, analytics SDK,
          advertising integration, or developer-operated upload of your learning
          records. The current website does not sell or share learning-sample
          answers for advertising. Device backup and browser or operating-system
          synchronization, if enabled by you, are controlled by their providers;
          they are separate from an app cloud-sync feature.
        </p>
        <p>
          If you choose to contact the operator by email, your address, message,
          and attachments will be processed by the email services involved. Send
          only information needed to handle your request. A support or
          repository link, once configured, leads to another service with its
          own privacy practices.
        </p>
      </section>
      <section>
        <h2>7. Retention, removal, and your controls</h2>
        <p>
          Learning records remain in local app storage until you remove them
          using the relevant device or browser controls, subject to platform
          behavior, storage eviction, backups, or loss of the device. The
          current app does not implement an automatic expiration schedule or a
          central account-deletion endpoint.
        </p>
        <ul>
          <li>
            For the web app, remove that app origin’s site data in your browser
            settings. This can delete progress, settings, quiz attempts, and
            legacy preferences.
          </li>
          <li>
            For native apps, use the operating system’s app-data removal
            controls or uninstall the app, checking whether the platform retains
            backups or restores data.
          </li>
          <li>To discard website sample state, reload or leave the page.</li>
          <li>
            To control speech processing, review your browser, operating-system,
            and voice-provider settings.
          </li>
        </ul>
        <p>
          Removing local data is usually irreversible within the app. The
          operator cannot remotely retrieve, export, or delete a database stored
          only on your device. Technical hosting logs and messages you send have
          separate retention arrangements that the operator must confirm.
        </p>
      </section>
      <section>
        <h2>8. Security, rights, and children</h2>
        <p>
          Local storage is subject to device and browser access controls. No
          additional app-level database encryption or recovery guarantee is
          claimed. Keep your device protected and use trusted software sources.
          No storage or transmission method can guarantee absolute security.
        </p>
        <p>
          Depending on the law that applies to you, rights may include access,
          correction, deletion, restriction, objection, portability, withdrawal
          of consent where processing relies on it, and complaints to a relevant
          authority. The applicable legal basis, controller obligations, and
          authority depend on the operator’s actual location and processing. No
          unverified jurisdiction-specific compliance claim is made. Contact the
          operator for requests concerning information it actually holds.
        </p>
        <p>
          The service offers vocabulary practice without asking for age or
          creating child profiles. No child-specific analytics, behavioral
          advertising, or chat feature is included. A parent or guardian should
          help a child manage device storage, speech settings, and external
          links. The operator must review any additional obligations for the
          intended audience and jurisdiction.
        </p>
      </section>
      <section>
        <h2>9. Policy changes and questions</h2>
        <p>
          New features, hosting changes, or new integrations can change data
          handling. Update this policy and its effective date before introducing
          materially different practices, with any notice or consent required by
          applicable law. The review date describes the latest review of this
          text; an unconfirmed effective date is not a claim that operator
          review is complete.
        </p>
        <p>
          Use the contact details above for privacy questions when provided.
          Related information is available in the{" "}
          <Link href="/terms">Terms of Service</Link> and{" "}
          <Link href="/credits">Credits and Attribution</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
