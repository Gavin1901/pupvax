import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy (2026) — PupVax",
  description: "PupVax 2026 privacy policy. Your dog profiles are stored only in your own browser. We use Google Analytics and Google AdSense.",
  alternates: { canonical: "https://pupvax.com/privacy-policy" },
};

export default function Privacy() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-10 prose prose-stone">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated: June 26, 2026</strong></p>
        <p>
          PupVax (pupvax.com) is a free 2026 dog vaccine and deworming schedule tracker.
          We respect your privacy and collect as little data as possible.
        </p>
        <h2>Your dog profiles</h2>
        <p>
          When you add a dog (its name, birth date and optional breed), that information is saved in
          your browser&apos;s localStorage so your schedule is ready next time you visit. This data
          never leaves your device. It is not sent to us or any third party. Clearing your browser
          data removes it permanently. You can also delete individual dog profiles using the Remove
          button in the tool.
        </p>
        <h2>Analytics</h2>
        <p>
          We use Google Analytics to understand aggregate, anonymous traffic patterns such as which
          pages are popular and how users find the site. Google Analytics may set cookies on your
          device. No personally identifying information is collected. You can opt out of Google
          Analytics by using a browser extension such as Google&apos;s own opt-out add-on.
        </p>
        <h2>Advertising</h2>
        <p>
          We display ads through Google AdSense. Google and its advertising partners may use cookies
          to serve ads based on your prior visits to this and other websites. You can opt out of
          personalized advertising by visiting Google&apos;s Ads Settings at adssettings.google.com.
          Users in the EEA and UK can manage consent through the Google ad privacy controls.
        </p>
        <h2>Cookies</h2>
        <p>
          PupVax itself does not set any first-party cookies. Third-party services (Google Analytics
          and Google AdSense) may set cookies as described above. The dog profile data stored in
          localStorage is not a cookie and is never transmitted.
        </p>
        <h2>Children&apos;s privacy</h2>
        <p>
          PupVax is not directed at children under 13. We do not knowingly collect any personal
          information from anyone under 13 years of age.
        </p>
        <h2>Not veterinary advice</h2>
        <p>
          PupVax is for educational purposes only and is not a substitute for professional veterinary
          advice, diagnosis or treatment. Always consult your veterinarian about your dog&apos;s
          vaccination and health needs.
        </p>
        <h2>Changes to this policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted on this page
          with an updated effective date. Continued use of the site after changes means you accept
          the updated policy.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, contact us via the email listed in our domain registration or
          through the contact information available on our hosting provider.
        </p>
      </div>
    </SiteShell>
  );
}
