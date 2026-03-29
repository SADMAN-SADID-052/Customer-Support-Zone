# CS — Ticket System

A React-based Customer Support Ticket System that helps manage and track customer issues efficiently.

## 🔗 Links
- **Live Link:** https://thunderous-croquembouche-cb3dff.netlify.app/

---

## ❓ Questions & Answers

### 1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. It is used in React to describe what the UI should look like. JSX makes the code more readable and easier to write by combining the UI structure and logic in one place. Under the hood, JSX is converted to regular JavaScript by tools like Babel.

---

### 2. What is the difference between State and Props?
| | State | Props |
|---|---|---|
| Definition | Data managed inside a component | Data passed from parent to child |
| Mutable | Yes, can be changed using setState or useState | No, read-only |
| Ownership | Belongs to the component itself | Passed by the parent component |
| Example | `const [count, setCount] = useState(0)` | `<Banner inProgress={inProgress} />` |

---

### 3. What is the useState hook, and how does it work?
`useState` is a React hook that allows functional components to manage state. It returns an array with two elements: the current state value and a function to update it.

**Example:**
```jsx
const [count, setCount] = useState(0);
// count = current value
// setCount = function to update the value
```
When `setCount` is called with a new value, React re-renders the component with the updated state.

---

### 4. How can you share state between components in React?
State can be shared between components using **lifting state up**. This means moving the shared state to the closest common parent component and passing it down as props to child components.

**Example in this project:**
- `ticketList`, `taskList`, `resolvedList` states are managed in `App.jsx`
- They are passed down to `TicketCard` and `TaskStatus` as props
- When a ticket is clicked, the handler function updates the state in `App.jsx` which re-renders all related components

---

### 5. How is event handling done in React?
In React, events are handled using camelCase event handlers directly on JSX elements. Instead of using `onclick` (HTML), React uses `onClick`. Event handlers are passed as functions.

**Example:**
```jsx
<button onClick={() => handleComplete(task)}>
  Complete
</button>
```
In this project, clicking a ticket card calls `handleAddToTask()` and clicking the Complete button calls `handleComplete()`.

---

##  Tech Stack
- React.js
- Tailwind CSS
- DaisyUI
- React Toastify