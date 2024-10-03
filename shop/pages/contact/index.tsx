import React, { FC } from 'react';
import { Layout } from '@/components';

const ContactPage: FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Company: High Gear Car Shop</h4>
      <h4>Address: Gjorgji Pulevski 24, Skopje</h4>
      <h4>ZIP: 1000</h4>
      <h4>Country: Macedonia</h4>
    </div>
  );
};

const PageAWithLayout = Layout(ContactPage);

export default function Contact() {
  return <PageAWithLayout layout="contact" />;
}
