# 3220 Group Project
 
| Content        |
| -------------- |
| Brief Overview |
| Functionality  |
| File Overview  |
| Installation   |

<br/>
A web portal for viewing Windsor open data sets built using react. It allows for quality of life features like data filtering and data previews, in addition to allowing downloads.

## Functionality
The following features are work in the current iteration:
- The home page is has a working image carousel and correctly displays recently viewed data as long as cookies are enabled.
- The login page can be viewed by clicking on the logged out user icon but there isn't login functionality.
- The data tab can be accessed and all filtering options except for the media type ones (text, video, etc) work and all the data can be clicked on for further information.
- The individual data view allows for downloading the data and clicking on the dropdowns allows for viewing further information, including a preview of the data in a table.

## File Overview
- App.js - Responsible for page routing and page rendering. Always renders the Navbar.
- Navbar.js - Responsible for rendering the navigation bar and notifying App.js of URL changes.
- filecomponents.js (Classification class) - Responsible for storing information on the data sets and providing functionality to retrieve this information and sort it.
- multidata.js (MultiDataView class) - Responsible for showing a list of data that is under the selected filters and providing navigation to view that data.
- detail-view.js (Overview class) - Responsible for determining which data to show from the URL, updating the recently viewed data cookie and rendering the other elements of the overview.
- image.js - Responsible for displaying the data overview icon and description (title and tags).
- desc.js - Responsible for displaying the title and tags of the viewed data and retrieves this information from the Classification class.
- detail.js - Responsible for creating and rendering three dropboxes for the information about the data set.
- dropbox.js - Responsible for tracking if it is expanded and displaying the Data class only if visible.
- Data.js - Responsible for using the Classification class to retrieve the information to display and rendering it. It could be a text description or the DisplayCSVData class for a preview.
- DisplayCSVData.js - Responsible for loading and parsing the requires CSV file and displaying it in a table.
- LoginForm.js - Responsible for displaying the elements on the login page.
- SocialButton.js - Responsible for displaying a button with the icon of the social platform associated on the login page.
- Button.js - A button used on the login page.
- InputField.js - A component to allow entering text on the login page.
- HomePage.js - Responsible for displaying the home page image carousel and the recently viewed data.
- HomeCarousel.js - Responsible for loading the images to display, formatting the space and rendering the ImageCarousel.
- ImageCarousel.js - Responsible for tracking which image to show, handling user input in the carousel and rendering the image carousel features.
- VerticalDataList.js - Responsible for displaying a list of recently viewed data by loading it from a cookie. Renders a VerticalDataListItem for each piece of data and passes the required DataItem to be rendered.
- DataItem.js - Responsible for containing the id, icon, title and description for a piece of data.
- VerticalDataListItem.js - Responsible for displaying the specified piece of data and navigating to the data overview for that item when clicked.

## Installation

To run the project, first ensure you have node.js and react installed.
To install react through node package manager, run
```
npm i react
```
Then clone the repository with
```
git clone https://github.com/zayatMark/3220-group-project.git
```
and from within the project directory install the required modules with
```
npm install
```
To start the website, run
```
npm start
```