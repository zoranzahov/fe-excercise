import React from 'react';
import {render, screen} from '@testing-library/react';
import Home from '@/pages';

it('renders the Content component', () => {
    render(<Home />);
    expect(screen.getByRole('content')).toBeInTheDocument();
});
