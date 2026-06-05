import { Link } from "react-router-dom";

export type FooterLink = { href: string; label: string };

type FooterLinkColumnProps = {
  title: string;
  links: FooterLink[];
};

function isAppRoute(href: string) {
  return href === "/download";
}

export function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <div className="footer__title">{title}</div>
      <div className="footer__links">
        {links.map((link) =>
          isAppRoute(link.href) ? (
            <Link key={`${link.href}-${link.label}`} to={link.href}>
              {link.label}
            </Link>
          ) : (
            <a key={`${link.href}-${link.label}`} href={link.href}>
              {link.label}
            </a>
          ),
        )}
      </div>
    </div>
  );
}
