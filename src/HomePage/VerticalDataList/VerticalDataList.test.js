
import { render, screen } from '@testing-library/react';
import VerticalDataList from './VerticalDataList';

test('renders Vertical Data List', () => {
    
    //Render the vertical data list
    render(<VerticalDataList />);

    //Get the vertical data list element
    const verticalListELement = screen.getByTestId("vertical-data-list");

    //Check that it is on screen
    expect(verticalListELement).toBeInTheDocument();
    expect(verticalListELement).toBeVisible();
});
