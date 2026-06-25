import AuditCta from "../_components/AuditCta/AuditCta";
import SectionIntro from "../_components/SectionIntro/SectionIntro";
import SiteHeader from "../_components/SiteHeader/SiteHeader";
import SocialHighlights from "../_components/SocialHighlights/SocialHighlights";
import styles from "./website-benefits.module.css";

export const metadata = {
  title: "Modern Website Benefits for Jacksonville Service Businesses",
  description:
    "See how a faster, cleaner, mobile-first website helps Jacksonville contractors earn more calls, trust, and quote requests.",
};

const outcomes = [
  {
    title: "More trust before the first call",
    copy: "A clean, current website helps customers feel like they are dealing with an active, organized, and reliable local business.",
  },
  {
    title: "Fewer visitors lost on mobile",
    copy: "Most local service searches happen on phones. Fast pages, readable sections, and obvious buttons keep people moving toward contact.",
  },
  {
    title: "Better quote request flow",
    copy: "The right layout guides customers from the service they need to reviews, proof, and a simple way to request an estimate.",
  },
];

const upgrades = [
  "Clear service sections for the jobs customers search for",
  "Visible call, text, and quote request options",
  "Review, warranty, license, and insurance proof",
  "Fast-loading pages with optimized images",
  "Simple forms that do not feel like a chore",
  "Mobile layouts built for customers who are ready to act",
];

export default function WebsiteBenefitsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.headerWrap}>
        <SiteHeader variant="dark" />
      </div>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Modern website benefits</p>
        <h1>Your website should make customers confident enough to call.</h1>
        <p>
          A dated or slow website can make a strong local business look less reliable
          than it really is. A modern site helps explain your services clearly, build
          trust quickly, and make the next step obvious.
        </p>
      </section>

      <section className={styles.section}>
        <SectionIntro
          eyebrow="Business impact"
          title="Customers judge your business before they ever talk to you."
        />
        <div className={styles.cardGrid}>
          {outcomes.map((outcome) => (
            <article className={styles.card} key={outcome.title}>
              <h2>{outcome.title}</h2>
              <p>{outcome.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.featureBand}>
        <div>
          <p className={styles.eyebrow}>What gets upgraded</p>
          <h2>Every section should answer a question or move someone closer to a quote.</h2>
        </div>
        <div className={styles.list}>
          {upgrades.map((upgrade) => (
            <div className={styles.listItem} key={upgrade}>
              <span aria-hidden="true">+</span>
              {upgrade}
            </div>
          ))}
        </div>
      </section>

      <div className={styles.socialWrap}>
        <SocialHighlights />
      </div>

      <AuditCta />
    </main>
  );
}
