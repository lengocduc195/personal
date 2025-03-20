import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function Avatar({ src, alt, size = 256, className = '' }: AvatarProps) {
  return (
    <div className={`relative rounded-full overflow-hidden border-4 border-primary ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  );
} 