import { render, waitFor, screen } from '@testing-library/react';
import MultiDataView from './multidata';
import { BrowserRouter } from 'react-router-dom';
import logo from '../images/cityofwindsor.png';

test('renders the multi-data page', () => {
    //Render the home page
    render(
        <BrowserRouter>
            <MultiDataView/>
        </BrowserRouter>
    );

    //Test that if the education checkbox element is on screen
    const educationCheckBox = screen.getByLabelText("RECREATIONAL/EDUCATIONAL");
    expect(educationCheckBox).toBeInTheDocument();
    expect(educationCheckBox).toBeVisible();

    //test that if the transportation checkbox box element is on screen
    const transportationCheckBox = screen.getByLabelText("TRANSPORTATION");
    expect(transportationCheckBox).toBeInTheDocument();
    expect(transportationCheckBox).toBeVisible();

    //test that if the legal checkbox element is on the screen
    const legalCheckBox = screen.getByLabelText("LEGAL/ISSUES");
    expect(legalCheckBox).toBeInTheDocument();
    expect(legalCheckBox).toBeVisible();

    //test that if the environment checkbox element is on the screen
    const environmentCheckBox = screen.getByLabelText("ENVIRONMENTAL");
    expect(environmentCheckBox).toBeInTheDocument();
    expect(environmentCheckBox).toBeVisible();

    //test that if the infrustructure checkbox element is on the screen
    const infrustructureCheckBox = screen.getByLabelText("INFRASTRUCTURE");
    expect(infrustructureCheckBox).toBeInTheDocument();
    expect(infrustructureCheckBox).toBeVisible();

    //test that if the image checkbox element is on the screen
    const imageCheckBox = screen.getByLabelText("IMAGE");
    expect(imageCheckBox).toBeInTheDocument();
    expect(imageCheckBox).toBeVisible();

    //test that if the audio checkbox element is one the screen
    const audioCheckBox = screen.getByLabelText("AUDIO");
    expect(audioCheckBox).toBeInTheDocument();
    expect(audioCheckBox).toBeVisible();

    //test that if the video checkbox element is one on the screen
    const videoCheckBox = screen.getByLabelText("VIDEO");
    expect(videoCheckBox).toBeInTheDocument();
    expect(videoCheckBox).toBeVisible();

    //test that if the text checkbox element is one on the screen
    const textCheckBox = screen.getByLabelText("TEXT");
    expect(textCheckBox).toBeInTheDocument();
    expect(textCheckBox).toBeVisible();
});

test('renders individual data box items', async () => {
    //test dictionary with tuples from filecomponents.js
    const dataItem = [
        { i: 1, imgSrc: logo, data: 'Yard Waste Not Collected Service Requests' },
        {i: 2, imgSrc: logo, data: 'Tree Request'}
    ];

    //check if dataItem renders dataItem to filteredBoxes
    render(
        <BrowserRouter>
            <MultiDataView filteredBoxes={dataItem} />
        </BrowserRouter>
    );

    //checks if the following data is rendered as boxes in the react page
    await waitFor(() => {
        dataItem.forEach((box) => {
            expect(screen.getByText(box.data)).toBeInTheDocument();
        });
    });

    

});
