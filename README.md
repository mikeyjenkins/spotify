#To run the project locally, you MUST run on port localhost:3000. This is because the spotify API only allows access to specified routes, and I have chosen to specify local port 3000. 

#If there are any dependency issues, you may need to run npm install 

##Start the app using npm run start or yarn start

#In order to use this app you need a Spotify Account. You log into the interface using the home page prompt to log in. 


#Search - the dashboard page allows you to see songs that you recently listened to or songs and artists that you listen to often. You can also search using spotify's search API to find different songs and add them to your library

#Library - The library page is simply a list of tracks you have liked before. The spotify API for library only returns 20 results, but as you can see the Infinite-Scroll features allows you to make continuous api calls by scrolling down

#Player - The player is simple a controller for a device that is playing spotify. You can control the music by clicking play,pause,next,prev. So this is simply a UI around that. If you are not playing a song, there is a message prompting you to start playing a song. You will need to refresh after you start playing songs

