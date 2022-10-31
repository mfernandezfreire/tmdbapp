import { render, screen } from '@testing-library/react';
import { MovieCard } from './MovieCard';

test('should render home component correctly', () => {
  render(<MovieCard />);
  expect(screen.getByText('Go somewhere')).toBeInTheDocument();
}); 