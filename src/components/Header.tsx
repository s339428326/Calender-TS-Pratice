import { type PropsWithChildren } from 'react';

export const Header = ({ children }: PropsWithChildren) => {
  return <header className="py-2 border border-t mb-4">{children}</header>;
};
