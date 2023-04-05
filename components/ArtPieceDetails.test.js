import { render } from '@testing-library/react';
import ArtPieceDetails from '../components/ArtPieceDetails';

test('renders art piece details with favorite button', () => {
  const props = {
    image: '/image.jpg',
    title: 'Example Title',
    artist: 'Example Artist',
    year: '2022',
    genre: 'Example Genre',
    slug: 'example-slug',
  };

  const { getByText, getByAltText, getByTestId } = render(<ArtPieceDetails {...props} />);

  expect(getByText(props.title)).toBeInTheDocument();
  expect(getByText(`Artist: ${props.artist}`)).toBeInTheDocument();
  expect(getByText(`Year: ${props.year}`)).toBeInTheDocument();
  expect(getByText(`Genre: ${props.genre}`)).toBeInTheDocument();
  expect(getByAltText(props.title)).toBeInTheDocument();
  expect(getByTestId('favorite-button')).toBeInTheDocument();
});
