import { render } from '@testing-library/react';
import ArtPiecePreview from '../components/ArtPiecePreview';

test('renders art piece preview with favorite button', () => {
  const props = {
    slug: 'example-slug',
    imageSource: '/image.jpg',
    title: 'Example Title',
    artist: 'Example Artist',
  };

  const { getByText, getByAltText, getByTestId } = render(<ArtPiecePreview {...props} />);

  expect(getByText(props.title)).toBeInTheDocument();
  expect(getByText(props.artist)).toBeInTheDocument();
  expect(getByAltText(props.title)).toBeInTheDocument();
  expect(getByTestId('favorite-button')).toBeInTheDocument();
});
