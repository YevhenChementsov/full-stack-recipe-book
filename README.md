## Project Structure
_The project is divided into two main folders:_

**Backend**: Contains the Node.js application responsible for fetching and serving recipe data.

**Frontend**: Contains the React application responsible for displaying recipes and interacting with the backend.

---
## Tech Stack

**Backend**
 - Node.js (Express.js)
 - TypeScript
 - Recipe API (https://www.themealdb.com/api.php)

**Frontend**
 - React.js
 - TypeScript
 - CSS Framework (TailwindCSS)

---
## Features
#### Backend
**1. Get Available Recipes**
  - Endpoint to fetch all available recipes.
  - Supports filtering by:
      - ***Ingredient***: `/recipes?ingredient=chicken_breast`
      - ***Country***: `/recipes?country=Canadian`
      - ***Category***: `/recipes?category=Seafood`

**2.Get Recipe Info**
  - Endpoint to fetch detailed information about a specific recipe by its ID: `/recipe/:id`

#### Frontend
**1. Recipe List Page**
  - Displays a list of recipes fetched from the backend.
  - Supports filtering by ingredient, country, or category.
  - Each recipe item is clickable and navigates to the Recipe Info Page.

**2. Recipe Info Page**
  - Displays detailed information about the selected recipe, including:
    - Recipe image
    - Recipe name
    - Recipe country (clickable to filter recipes by country)
    - Recipe instructions
    - Recipe ingredients (each ingredient is clickable to filter recipes by ingredient)
  - Right sidebar:
    - Displays a list of recipes in the same category (clickable to filter recipes by category).

---
## Setup Instructions
#### Prerequisites
  - Node.js (v16 or higher)
  - npm or yarn
  - Git

#### Backend Setup
1.Navigate to the `backend` folder:

```bash
cd backend
```
2.Install dependencies:

```bash
yarn
```
3.Start the backend server:

```bash
yarn build
```
```bash
yarn start
```
The backend will run on `http://localhost:3001/recipes`.

#### Frontend Setup
1.Navigate to the frontend folder:

```bash
cd frontend
```
2.Install dependencies:

```bash
yarn
```

3.Start the frontend server:

```bash
yarn build
```
```bash
yarn preview
```
The frontend will run on `http://localhost:3000/recipes`.

---
## Running the Application
1. Start both the backend and frontend servers as described above.

2. Open your browser and navigate to `http://localhost:3000/recipes` to access the frontend.

3. The frontend will communicate with the backend to fetch and display recipe data.

---
## Code Quality

 - ESLint and Prettier are configured to ensure consistent code formatting and quality.
 - Run the following commands to lint and format the code:

```bash
yarn lint
yarn format
```

---
## Environment Variables
 - Sensitive data such as API keys and base URLs are stored in `.env` files.

---
## API Documentation
Recipe API: [Free Recipe API Documentation](https://www.themealdb.com/api.php)
