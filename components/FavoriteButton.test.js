import { render, fireEvent } from '@testing-library/react';
import { ArtPiecesContext } from '../context/ArtPiecesContext';
import FavoriteButton from '../components/FavoriteButton';

test('renders favorite button and toggles favorite state', () => {
  const slug = 'example-slug';
  const artPiecesInfo = { [slug]: { isFavorite: false } };
  const toggleFavorite = jest.fn();

  const { getByTestId } = render(
    <ArtPiecesContext.Provider value={{ artPiecesInfo, toggleFavorite }}>
      <FavoriteButton slug={slug} />
    </ArtPiecesContext.Provider>,
  );

  const button = getByTestId('favorite-button');
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(toggleFavorite).toHaveBeenCalledWith(slug);
});
