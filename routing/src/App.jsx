import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Redirect, Link,Navigate } from 'react-router-dom'
import React, {useState} from 'react';

// page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Article from './pages/Article'

function App() {

  const articles = [
    {
      "id": "1",
      "title": "Welcome to the Site",
      "author": "Mario",
      "body": "Welcome to Puzzles, your go-to resource for web development insights, coding tips, and software recommendations! Whether you’re a beginner or an experienced developer, we’re here to help you level up your skills. Stay tuned for tutorials, best practices, and deep dives into the latest tech trends. Let’s start building something amazing together!"
    },
    {
      "id": "2",
      "title": "5 React Tips for Beginners",
      "author": "Luigi",
      "body": "React is a powerful JavaScript library, but getting started can feel overwhelming. Here are five essential tips to help beginners build better React apps: 1.	Use Functional Components – They are simpler, easier to read, and make your code more maintainable. 2.	Leverage React Hooks – Hooks like useState and useEffect allow you to manage state and side effects without class components. 3.	Keep Components Small & Reusable – Break your UI into small, reusable components to maintain clean and modular code. 4.	Use Props Efficiently – Pass data between components using props, but avoid unnecessary prop drilling by using context or state management tools. 5.	Optimize Performance – Use React’s useMemo and useCallback hooks to prevent unnecessary re-renders and improve efficiency. By following these tips, you’ll write cleaner, faster, and more scalable React applications!"
    },
    {
      "id": "3",
      "title": "VS Code Best Packages",
      "author": "Mario",
      "body": "VS Code is a favorite among developers due to its flexibility and extensions. Here are some of the best packages to enhance your workflow: •	ESLint – Keeps your code clean and error-free by enforcing coding standards. •	Prettier – Automatically formats your code to maintain consistency. •	Live Server – Instantly refreshes your browser when making changes in HTML, CSS, or JavaScript. •	GitLens – Enhances Git functionality inside VS Code for better version control. •	Tailwind CSS IntelliSense – Provides autocompletion and syntax highlighting for Tailwind CSS. With these extensions, your VS Code setup will be more efficient, organized, and developer-friendly!"
    }
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Puzzles.</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element = {<Home articles={articles}/>} />              
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/articles/:urlId" element ={<Article articles={articles} />} />   
          <Route path="/*" element={<Navigate to="/"/> }/>       
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App