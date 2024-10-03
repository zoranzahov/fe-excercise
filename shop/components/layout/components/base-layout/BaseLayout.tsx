import React, { FC } from 'react';

import { Header } from '@/components';
import { Footer } from '@/components';

interface Props {
  children: React.ReactNode;
}

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
