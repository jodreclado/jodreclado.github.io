import React, { useEffect, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  list: string[];
}

// refactor later
const Bullets: FunctionComponent<IProps> = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>  
  )
}

const Notes = () => {
  useEffect(() => {
    document.title = "Notes";
  }, []);

  let junkPage = "/" + (+new Date()).toString(36).slice(-5);

  return (
    <div className='page'>
      <h2>Notes</h2>
      <h3>Tests</h3>
      <ul>
        <li><Link to={junkPage}>404</Link></li>
        <li>Error boundary?</li>
      </ul>
      <h3>TODO</h3>
      <Bullets list={todoNotes} />
      <h3>Console log fixes</h3>
      <Bullets list={consoleNotes} />
    </div>
  );
}

const todoNotes: string[] = [
  "Redo API calls + add more functionality (clever, Youtube, Amazon)",
  "Update Pokemon UI + info",
  "Refactor code and components (e.g., setting document titles, routes/lists)",
  "Test different viewports, mobile, browser versions",
  "Change placeholder widget? (flash now blocked by default)",
  "Add more pictures + collapsibles",
  "Other: HTTPS enforcement, gh-pages deployment, Heroku/Firebase.",
  "Adjust CSS for projects (modal images 3:2 ratio, didn't fix heights, test single/double/quad formats)",
  "Uniform format and style for project descriptions"
]

const consoleNotes: string[] = [
  "Can't perform a state update on an unmounted component. " + 
  "Fix by cancelling all subscriptions and asynchronous tasks in a useEffect cleanup function.",
  "Cross-origin plugin content must have a visible size larger than 400x300 pixels.",
  "React child elements need unique keys (avoid using index for dynamic lists)."
] 

export default Notes;