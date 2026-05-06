# Car Parking GPS Tracker

A simple and user-friendly static web app to track your car's parking location using GPS. This project was created to help users save and load parking locations with ease. The app saves GPS positions in the browser's localStorage and displays them on a Google Maps embed map. Designed with maintainability and upgradability in mind, this app is perfect for anyone needing a lightweight parking tracker.

## Features

- **Save GPS Position**: Sets the current GPS location to the browser's localStorage.
- **Load GPS Position**: Gets the saved GPS location and displays it on an embedded Google Map.
- **Simple and Intuitive**: User friendly interface with two main buttons: Save and Load.
- **No App Required**: Fully functional as a static web app in any modern browser.

## Project Structure

```plaintext
project-root/
├── index.html  # Main HTML file
├── script.js   # JavaScript logic for GPS and localStorage
├── styles.css  # Styling for the web app
```

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/had2020/GPSParking.git
   ```
2. Navigate to the project directory:
   ```bash
   cd GPSParking
   ```
3. Open `index.html` in your browser, or use it from github pages.

## Usage

### Save GPS Position
1. Allow the browser to access your location when prompted.
2. Click the **Save GPS Position** button to store the current GPS position in localStorage.

### Load GPS Position
1. Click the **Load GPS Position** button to retrieve the saved GPS position.
2. The location will be displayed on an embedded Google Map using the following iframe structure:

   ```html
   <iframe src="https://maps.google.com/maps?q=' + latitude + ',' + longitude + '&t=&z=15&ie=UTF8&iwloc=&output=embed"</iframe>
   ```

## Future Improvements

- Add support for multiple saved locations.
- Implement a search bar to manually input addresses.
- Enhance the UI with modern CSS frameworks like Bootstrap.
- Add a feature to delete saved locations.

---

Made with ❤️ for my father who needed a lightweight solution to track parking location.
