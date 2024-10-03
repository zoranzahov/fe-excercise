import React from 'react';
import { render, screen } from '@testing-library/react';
import BaseLayout from '@/components/layout/components/base-layout';

describe('BaseLayout', () => {
    const children = <h1>Hello, World!</h1>;
  it('renders Header and Footer components', () => {

    render(<BaseLayout>{children}</BaseLayout>);

    expect(screen.getByRole('banner')).toBeInTheDocument(); 
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('passes children to the main element', () => {

    render(<BaseLayout>{children}</BaseLayout>);

    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});