const footerLinks = [
  { label: "Email", href: "mailto:hgoyal@uwaterloo.ca" },
  { label: "LinkedIn", href: "https://linkedin.com/in/hareshgoyal" },
  { label: "GitHub", href: "https://github.com/hareshgoyal" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#1f1e1c] py-6">
      <div className="max-w-2xl mx-auto px-6 flex items-center justify-center gap-6">
        {footerLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-sm text-[#5a5650] hover:text-[#d4d0c8] transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
