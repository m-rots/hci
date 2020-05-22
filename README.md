# Ganzensport
Ganzensport is a playful fitness app with multiple gaming elements embedded within. Made by Jeanine, Sanne and Storm, members of group 6 of Human Computer Interaction.

## How to run the server
1. Install [NodeJS and NPM](https://nodejs.org/en/download) (preferably version >= 12 of NodeJS)
2. Clone this repository with `git clone https://github.com/m-rots/hci.git`
3. Cd into the repository
4. Install the dependencies using `npm install`
5. Start the server by running `npm run build && npm run start`

## How to access the app
1. Open http://localhost:3000 in your local browser
2. Use the developer tools of your browser to imitate a mobile device

Unable to start the server? The latest progress can always be found on https://hci.m-rots.com.

If you open [this URL](https://hci.m-rots.com) on iOS Safari, then you can click the share button to add Ganzensport to your home screen. This gives you the full app experience!

## Features
- App is fully responsive for mobile devices in portrait mode (tested on all iPhones ranging from 5/SE to 11 Pro Max)
- Leaderboard & Start of workout pages
- Navigation bar component global for all pages (enables animations)
- Installable as a PWA on Android (untested) and iOS (tested on iOS 13.4 and 13.5).
- Leaderboard is fully dynamic, everything is calculated and ordered based on the user's points.
- Progress page displaying the current month, as well as the battlepass.
- Fully working rewards page. Your account is a special one as you can have negative coins too!
- Some subtle animations.
