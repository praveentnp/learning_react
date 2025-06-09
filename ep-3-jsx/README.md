# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

1.  funtion App() - returns only one <div>, whichever last one. So, all data should keep inside single DIV
    Correct :
    function App() {
    return (
    <div>
    <h1> React JSX </h1>

          <div>
            <h2> Welcome to React </h2>
          </div>
        </div>

    );
    }

Wrong :
function App() {
return (

<div>
<h1> React JSX </h1>

      <div>
        <h2> Welcome to React </h2>
      </div>
    </div>,
    <div>
      <h1> React JSX </h1>

      <div>
        <h2> Welcome to React </h2>
      </div>
    </div>

);
}

---

2. <h1 style={{ color: "white", backgroundColor: "blue" }}> React JSX </h1>
   in above line style is a properties(not an attribute)

3. condition based
   {isLoggedIn ? <p>Status: Logged In {author} </p> : <p>Status: Guest</p>}

4. Fragment
   <>
   </>

   or
   <React.Fragment>
   </React.Fragment>

5. Fragemnt - key concept explined in list.rendering. React.Fragment accept only one attribute is "Key"
   <React.Fragment key={1}?
   </React.Fragment>
