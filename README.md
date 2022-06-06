# Spotify Songbird
***
## Description:
Our project is a social media platform that accompanies Spotify and allows users to curate their own music profile to share with others. Users can sign in through Spotify and interact with other users through forums, chat messages, and a discover page that lists public users.
***
## Technologies Used: 
On the frontend, this project primarily uses the React JavaScript library. This means the primary languages used are JavaScript, HTML, and CSS. This frontend React project makes API calls to the backend setup through Axios, a promise-based HTTP client that also uses JavaScript. The backend is an API built with Express, which also uses JavaScript to build API calls. The backend API calls are used to make calls both to Spotify’s API (for spotify data) and the Firebase API (for updating the databases). 
***
## Installation
Npm install axios
Npm install firebase/firestore
Npm install @mui/icons-material @mui/material @emotion/react @emotion/styled @material-ui/core 
***
## Features:
- Spotify authentication which provides users with security and privacy while linking their Spotify Songbird account to Spotify.
- Discover Page where users can view profiles of public accounts which includes songs, and artists that the user chose to display
- Top Artists Page where users can view the top artists they have listened to in the past month , past 6 months, and past year.
- Top songs Page where users can view the top songs they have listened to in the past month , past 6 months, and past year.
- Forum page where users can create discussions about music and respond to other users.
- User Profile page where users can customize what songs and artists show up on their account and users are able to see the profile of other users and interact with their information.
***
## Project Status:
The project is currently in a working state, although there are still many bugs and issues. Currently, the following features are almost (*) or fully implemented: 
- Login page
   - Authentication system
   - Create account* 
- User discover page 
- User profile edit mode (for user’s page)*
- User profile view mode (for other user’s pages) 
- Top songs page
- Top artists page
- Liked songs page 
- Forum page*

However, some problems do currently exist in the project and these should be resolved before adding new features. Features marked with an asterisk are features that are not fully completed yet and/or have unresolved issues. Specifically: 
- The create account button does not always work. Sometimes, it simply does not take the user to the next account creation page. More testing needs to be done to figure out why this happens. Overall, more error catching needs to be done (i.e. show the user when an email has already been taken or their login is incorrect). 
- The user profile edit page has a bug that occurs when deleting an item from displayed songs or artists and then trying to add one afterwards. After deleting an item, it will not appear on the options to add another item, even though it’s no longer on the displayed list. Instead, one of the existing options will be duplicated, and if one of these duplicated options is chosen, it creates more problems on the page. It is not entirely clear why this happens but it likely has to do with the way React doesn’t update component states immediately. 
- The forum page does not automatically refresh upon posting, replying, or upvoting. This is not a major bug and happens very frequently when working with Firebase, so it should be quite easy to fix. 
- Additionally, when refreshing the page or hitting the back button on the browser, the Spotify token used to make API calls (generated after logging in) is reset. There is likely no way to get around this issue, as all the page’s data is reset on a refresh/new load, but the website should at least take the user back to the Spotify authentication page instead of breaking entirely and just becoming a blank page. One possible solution would be to store the token in some more permanent database, but this presents many security issues and is not recommended without taking some amount of caution.

After these features are fixed, the next big feature to develop is the inbox/messaging system between users. 

