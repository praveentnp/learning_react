1.  npm create vite@latest

    > npx
    > create-vite

        │
        ◇  Project name:
        │  ep-4-components
        │
        ◇  Select a framework:
        │  React
        │
        ◇  Select a variant:
        │  JavaScript
        │
        ◇  Scaffolding project in C:\ep-4-components...
        │
        └  Done. Now run:

2.  cd ep-4-components
3.  npm install
4.  npm run dev

---

1. create todo list
2. Functional Component
3. Class Component
4. rafce - react Arrow Function Export Component - default export

---

import React from 'react'

const Content = () => {
return (

<div>Content</div>
)
}

export default Content

5. rafc - react Arrow Function Component - Named export

---

import React from 'react'

export const Content = () => {
return (

<div>Content</div>
)
}

---

6.

Component  
Build block to create user interface, its return jsx(html, javascript)
Reusage

Functional Component
Stateless component
State – handled by library

Class Component
Stateful component
State – handled by few properties and method inside a class

Hooks:
