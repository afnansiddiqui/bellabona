import Image from 'next/image';
import Link from 'next/link';

interface BellaBonaLogoProps {
  logoUrl?: string;
  logoAlt?: string;
}

export const BellaBonaLogo = ({ logoUrl, logoAlt }: BellaBonaLogoProps) => {
  const altText = logoAlt || "Bella & Bona";
  return (
    <Link
      href="/"
      aria-label={`${altText} — Home`}
      className="transition-opacity duration-150 hover:opacity-70"
    >
      <Image
        src={logoUrl || "/logo-bellabona.svg"}
        alt={altText}
        width={178}
        height={32}
        priority
      />
    </Link>
  );
};
