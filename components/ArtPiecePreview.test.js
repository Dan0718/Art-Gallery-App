// components/ArtPiecePreview.test.js
import { render, screen } from '@testing-library/react';
import ArtPiecePreview from './ArtPiecePreview';

test('renders art piece preview', () => {
  render(<ArtPiecePreview title="Test Art Piece" artist="Test Artist" imageSource="https://example.com/test-image.jpg" />);
  const titleElement = screen.getByText(/Test Art Piece/i);
  const artistElement = screen.getByText(/Test Artist/i);
  expect(titleElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
});
