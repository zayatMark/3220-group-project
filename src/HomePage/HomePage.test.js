
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders the home page', () => {
    //Render the home page
    render(<HomePage />);

    //Test that the home carousel is on screen
    const homeCarouselElement = screen.getByTestId("home-carousel");
    expect(homeCarouselElement).toBeInTheDocument();
    expect(homeCarouselElement).toBeVisible();

    //Test that the recent data title is on screen
    const recentTitleElement = screen.getByText("Recent Data");
    expect(recentTitleElement).toBeInTheDocument();
    expect(recentTitleElement).toBeVisible();

    //Test that the vertical data list is on screen
    const dataListElement = screen.getByTestId("vertical-data-list");
    expect(dataListElement).toBeInTheDocument();
    expect(dataListElement).toBeVisible();
});
