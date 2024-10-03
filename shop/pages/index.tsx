import React from 'react';
import { Content, Layout } from '@/components';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

const PageWithLayout = Layout(LandingPage);

export default function Home() {
  return <PageWithLayout layout="landing" />;
}
