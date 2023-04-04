// components/ArtPieces.test.js
import { render, screen } from '@testing-library/react';
import ArtPieces from './ArtPieces';

const mockPieces = [
  {
    slug: 'test-piece',
    artist: 'Test Artist',
    name: 'Test Art Piece',
    imageSource: 'https://example.com/test-image.jpg',
  },
];

test('renders art pieces list', () => {
  render(<ArtPieces pieces={mockPieces} />);
  const titleElement = screen.getByText(/Test Art Piece/i);
  const artistElement = screen.getByText(/Test Artist/i);
  expect(titleElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
});
