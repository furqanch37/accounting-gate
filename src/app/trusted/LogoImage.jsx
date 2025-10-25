'use client';

import Image from "next/image";

export default function LogoImage({ src, alt, className }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}