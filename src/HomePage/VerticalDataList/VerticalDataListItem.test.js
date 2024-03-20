import { render, screen } from '@testing-library/react';
import VerticalDataListItem from './VerticalDataListItem';
import DataItem from './DataItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

test('renders vertical data list item', () => {
    //Create the dataItem and render the vertical data list item
    const dataItem = new DataItem(1, null, "Title 1", "Description 1");
    render(<BrowserRouter><Routes><Route path="/" element={<VerticalDataListItem data={dataItem} key={`vertical-data-item-${dataItem.getTitle()}`} />}></Route></Routes></BrowserRouter>);

    //Check that the title is there
    const titleElement = screen.getByText("Title 1");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toBeVisible();

    //Check that the description is there
    const descriptionElement = screen.getByText("Description 1");
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toBeVisible();

    //Check that the icon is there
    const iconElement = screen.getByTestId("vertical-list-icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toBeVisible();
});
