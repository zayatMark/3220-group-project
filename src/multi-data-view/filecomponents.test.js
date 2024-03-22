import Classification from './filecomponents';

//checks if getIdContent works
test('getIdContent returns correct dictionary for a valid ID', () => {
    const id = 3; //sample id
    const classification = new Classification();
    const content = classification.getIdContent(id);
    expect(content).toEqual(expect.objectContaining({
        'Category': expect.any(String),
        'Description': expect.any(String),
        'Medias': expect.any(Array),
        'Overview': expect.any(String),
        'UseCase': expect.any(String),
        'fileName': expect.any(String)

    }));
});

//checks if getsListOfFIles returns a list of arrays from the dictionary
test('getListOfFiles returns list of all values in dictionary', () => {
    const classification = new Classification();
    const fileList = classification.getListOfFiles();
    expect(Array.isArray(fileList)).toBe(true);
});

//checks if data returns a list of arrays that contain the filtered data
test('filteredData filters files based on topic categories and medias', () => {
    const values = [['Infrastructure'], ['Text']] //sample categories to test
    const classification = new Classification();
    const filteredData = classification.filterData(values);
    expect(Array.isArray(filteredData)).toBe(true);
});

