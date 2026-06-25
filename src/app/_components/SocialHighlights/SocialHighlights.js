import styles from "./SocialHighlights.module.css";

const socialLinks = [
  {
    name: "Facebook",
    handle: "Recent jobs, reviews, and local updates",
    href: "https://www.facebook.com/",
    icon: "f",
  },
  {
    name: "Instagram",
    handle: "Before-and-after project photos",
    href: "https://www.instagram.com/",
    icon: "ig",
  },
  {
    name: "X / Twitter",
    handle: "Announcements and quick business updates",
    href: "https://x.com/",
    icon: "x",
  },
];

export default function SocialHighlights() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Social profile connections</p>
        <h2>Make it easy for customers to find proof beyond the website.</h2>
        <p>
          A modern site can connect visitors to active Facebook, Instagram, and X/Twitter
          profiles so they can see recent work, customer feedback, photos, and updates.
        </p>
      </div>

      <div className={styles.linkGrid}>
        {socialLinks.map((link) => (
          <a
            className={styles.socialCard}
            href={link.href}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.icon} aria-hidden="true">
              {link.icon}
            </span>
            <span>
              <strong>{link.name}</strong>
              <small>{link.handle}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
