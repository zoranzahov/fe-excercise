import React from 'react';
import LandingLayout from './components/landing-layout';
import ContactLayout from './components/contact-layout/ContactLayout';

type LayoutType = 'landing' | 'contact';

interface WithLayoutProps {
  layout: LayoutType;
  children?: React.ReactNode;
}

const Layout = (WrappedComponent: React.ComponentType) => {
  const HOC: React.FC<WithLayoutProps> = ({ layout, children }) => {
    const Layout1 = layout === 'landing' ? LandingLayout : ContactLayout;

    return <Layout1>{children ? children : <WrappedComponent />}</Layout1>;
  };

  return HOC;
};

export default Layout;
