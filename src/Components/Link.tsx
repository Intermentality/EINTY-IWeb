import React from "react";

export const LinkNewWindow: React.FC<{
    children: React.ReactNode;
    href: string;
    noColorChange?: boolean;
  }> = ( { children, href, noColorChange } ) => (
    <a href={ href }
      target="_blank"
      rel="noreferrer"
      className={ `${ noColorChange ? '' : 'text-sky-300' }` }
    >
      { children }
    </a>
);