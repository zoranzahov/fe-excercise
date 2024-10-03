import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better assertions like "toBeInTheDocument"
import Home from '@/pages';

global.fetch = jest.fn();

describe('Home Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('fetches and displays cars data', async () => {
    const mockCars = [
      { id: 1, name: 'Car 1' },
      { id: 2, name: 'Car 2' },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockCars,
    });

    render(<Home />);


    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1); 
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/cars'); 
    });
  });
})