export type FooterLink = { href: string; label: string };

type FooterLinkColumnProps = {
  title: string;
  links: FooterLink[];
};

export function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <div className="footer__title">{title}</div>
      <div className="footer__links">
        {links.map((link) => (
          <a key={`${link.href}-${link.label}`} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
