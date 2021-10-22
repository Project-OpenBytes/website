import React, { FC, ReactNode } from 'react';
import Footer from '~/src/components/footer';
import Header from '~/src/components/header';

export interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
