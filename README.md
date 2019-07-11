## Web audio player for Church content

This project is for creating a web audio player for sermons and messages in the Church of Christ. A small team is working to digitize thousands of cassettes from the past four or five decades and we want an app to host them that offers things we couldn't find in existing services.

*This repo is for the backend Node.js app. The frontend React app can be found [here](https://github.com/WholeStackDev/fp-frontend).*

### Things completed so far

* Basic navigation with Apple Music style nav buttons at the bottom and a back button in the top left when you aren't on a top-level page work.
* When uploading an mp3, it reads the metadata and pre-populates fields about the track on the upload page.
* Uploading works. It writes the track information to a Postgres database and uploads the file to Azure blob storage.
* Selecting a track and streaming it from Node/Azure Storage works.
* The basics of the player with play/pause, a label the track's current position, and a slider to seek to different parts of the track are all working well. That page can currently only be reached by manually changing the URL to /player, it hasn't yet been incorporated into the rest of the app.

### Next steps

* Get the player/now playing page hooked up so it starts when you click a track, rather than just starting streaming with the default UI
* Get the minimized player at the bottom hooked up also control the player
* Get the Now Playing page to animate down to the minimized player when you navigate away (and keep playing)
