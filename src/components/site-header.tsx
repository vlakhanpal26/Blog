import Link from 'next/link';

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Me' },
  { href: '/contact', label: 'HMU' }
];

const socialLinks = [
  { href: 'https://instagram.com', label: 'IG' },
  { href: 'https://youtube.com', label: 'YT' },
  { href: 'https://spotify.com', label: 'SP' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-[#fdfcfb]/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-xs tracking-wide text-neutral-700 hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/" className="text-center font-serif text-5xl leading-none tracking-tight text-[#192f78]">
            Life of xyz
          </Link>

          <div className="flex justify-start md:justify-end">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-[#c5deea] px-6 py-3 text-xs uppercase tracking-[0.14em] text-[#163050]"
            >
              Socials
            </Link>
          </div>
        </div>

        <nav className="mt-5 flex flex-wrap items-center justify-center gap-8 text-base uppercase tracking-[0.12em] text-[#192f78]">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="border-b border-transparent pb-1 hover:border-[#192f78]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
