"use client";

import { Link, usePathname } from '@/navigation';
import { ReactNode } from 'react';

interface SwitchLanguageLinkProps {
  newLocale: "pt" | "en" | "es";
  children: ReactNode;
  className?: string;
}

export const SwitchLanguageLink: React.FC<SwitchLanguageLinkProps> = ({ newLocale, children, className = "olink" }) => {
  const pathname = usePathname();

  return (
    <Link href={pathname} locale={newLocale} className={` cursor-pointer ${className}`}>
      {children}
    </Link>
  );
};
