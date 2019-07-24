import React, { FunctionComponent } from 'react';

interface IProps {
  list: string[];
}

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
  return (
    <div>
      <h2>Notes</h2>
      <h3>TODO</h3>
      <Bullets list={todoNotes} />
      <h3>Console log</h3>
      <Bullets list={consoleNotes} />
    </div>
  );
}

const todoNotes: string[] = [
  "test"
]

const consoleNotes: string[] = [
  "Can't perform a state update on an unmounted component. " + 
  "Fix by cancelling all subscriptions and asynchronous tasks in a useEffect cleanup function.",
  "Cross-origin plugin content must have a visible size larger than 400x300 pixels.",
  "React child elements need unique keys (avoid using index for dynamic lists)."
] 

export default Notes;