'use client';

interface DoiLinkProps {
  doi: string;
  link: string;
}

export default function DoiLink({ doi, link }: DoiLinkProps) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-primary hover:underline"
      onClick={(e) => e.stopPropagation()}
    >
      DOI: {doi}
    </a>
  );
} 