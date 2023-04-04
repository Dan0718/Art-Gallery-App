import { render, screen } from '@testing-library/react';
import Spotlight from './Spotlight';

test('renders spotlight art piece', () => {
  render(<Spotlight imageSource="https://example.com/test-image.jpg" artist="Test Artist" />);
  const artistElement = screen.getByText(/Test Artist/i);
  expect(artistElement).toBeInTheDocument();
});
