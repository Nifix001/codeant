# CodeAnt AI Repository Dashboard

CodeAnt AI is a web application designed for managing and exploring repositories efficiently. It includes features such as a sidebar for navigation, repository listing, search functionality, and more. The login page is set as the index page of the application.

## Features

- **Responsive Design**: Fully responsive layout for both mobile and desktop views.
- **Sidebar Navigation**:
  - Full width on mobile with a height of half the screen.
  - Fixed on desktop for seamless navigation.
- **Repository Management**:
  - List of repositories with details such as name, type, language, size, and last update.
  - Search functionality to filter repositories.
- **Dynamic Actions**:
  - Refresh button to reload repositories.
  - Add repository button.
- **Mobile-Friendly Header**: Collapsible sidebar controlled via a menu button.

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **Icons**:
  - [Lucide React](https://lucide.dev/)
- **Images**:
  - Handled using the Next.js Image component.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Nifix001/codeant
   ```

2. Navigate to the project directory:

   ```bash
   cd codeant
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Pages

- **Login Page (Index Page)**: The entry point of the application. Users must log in to access other features.
- **Repositories Page**: Displays a list of repositories with detailed information.
- **Other Pages**:
  - All Code Review
  - Cloud Security
  - How to Use
  - Settings

## Folder Structure

```
.
├── components
│   ├── Sidebar.jsx # Sidebar component for navigation
|   |── LeftSection.jsx # Left section of the login page
├── data
│   ├── repositories.js   # Repository data
├── pages
│   ├── app.jsx          # Login page (index page)
│   ├── repositories.jsx   # Repositories page
├── public
│   ├── logo.jpg          # Application logo
├── styles
│   ├── globals.css       # Global styles
```

## Customization

- To adjust the sidebar design or behavior, modify `Sidebar.jsx`.
- To add more pages or features, update the `navLinks` array in the Sidebar component.

## Future Enhancements

- Add authentication functionality to the login page.
- Integrate a backend service for dynamic repository management.
- Implement additional features such as repository creation and deletion.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

