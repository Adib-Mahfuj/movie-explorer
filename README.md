# 🎬 CineScope

CineScope is a responsive React application that allows users to explore TV shows, search for specific shows, and view detailed information through an interactive modal.

The project was built as a React assignment using the TVMaze API for show data.

## ✨ Features

* Responsive navigation bar
* Home page with hero section
* Show listing page
* Search shows by title
* Responsive show card grid
* Show rating and release year
* Detailed show information modal
* Modal close button
* Close modal by clicking outside
* Loading state
* Error handling
* Empty search result state
* Responsive design for mobile, tablet, and desktop

## 🛠️ Technologies Used

* React
* JavaScript
* Tailwind CSS
* React Router
* TVMaze API
* Vite

## 🌐 API

This project uses the free TVMaze API.

### Get all shows

```text
https://api.tvmaze.com/shows
```

### Search shows

```text
https://api.tvmaze.com/search/shows?q=batman
```

TVMaze provides TV show data, so the application uses the term **Shows** throughout the user interface.

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   └── MovieModal.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Movies.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Open the project

```bash
cd movie-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

## 📱 Responsive Design

CineScope is designed to work across different screen sizes.

* **Mobile:** Single-column show grid
* **Tablet:** Two to three-column grid
* **Desktop:** Four-column grid

## 🎯 Main Pages

### Home

The Home page contains:

* Application branding
* Navigation
* Hero section
* Call-to-action button
* Short introduction
* Footer

### Shows

The Shows page contains:

* Search bar
* Show listing
* Responsive cards
* Ratings
* Release year
* Details button

### Details Modal

The modal displays:

* Show poster
* Show name
* Rating
* Release year
* Genres
* Network
* Summary
* Close button

## 📌 Note

Although the original assignment refers to a Movie Explorer, the provided API endpoints are from TVMaze and return TV show data. Therefore, this project uses **Shows** terminology in the user interface while keeping the card component and assignment structure aligned with the original requirements.

## 👨‍💻 Author

**Adib Mahfuj**

Built with React and Tailwind CSS.