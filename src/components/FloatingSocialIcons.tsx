import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const FloatingSocialIcons = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:allenhuang.jon@gmail.com',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+14255746590',
      label: 'Phone',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/wei-lun-allen-huang',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/allen6711',
      label: 'GitHub',
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-jade-light/90 hover:bg-jade-medium text-charcoal p-3 rounded-full shadow-card hover:shadow-hover transition-smooth hover:-translate-y-1 animate-float"
            style={{ animationDelay: `${index * 0.2}s` }}
            aria-label={link.label}
          >
            <Icon size={20} />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-charcoal text-background px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap pointer-events-none">
              {link.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default FloatingSocialIcons;