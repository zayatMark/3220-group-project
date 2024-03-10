import { render, screen } from '@testing-library/react';
import HomeCarousel from './HomeCarousel';

test('renders the Home Carousel', () => {
    render(<HomeCarousel />);

    //Test that all images are in the carousel
    const imageElement = screen.getAllByAltText("City of Windsor")

    imageElement.forEach(element => (
        expect(element).toBeInTheDocument()
    ))

    //Test that there is the right number of images in the carousel
    expect(imageElement.length).toBe(5)

    //Check that the button to go to the previous image is there
    const prevButton = screen.getByTestId("prev-button")
    expect(prevButton).toBeInTheDocument()
    expect(prevButton).toBeVisible()

    //Check that the button to go to the next image is there
    const nextButton = screen.getByTestId("next-button")
    expect(nextButton).toBeInTheDocument()
    expect(nextButton).toBeVisible()

    //Check that all the selection circles are there
    for(let i = 0; i < imageElement.length; i++) {
        const selectButton = screen.getByTestId(`select-button-${i}`)
        expect(selectButton).toBeInTheDocument()
        expect(selectButton).toBeVisible()
    }
  
});
