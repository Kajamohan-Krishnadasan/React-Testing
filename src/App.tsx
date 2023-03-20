import "./App.css";
import { AppProviders } from "./components/Providers/AppProviders";
import Users from "./components/Users/Users";

// import MuiMode from "./components/mui/MuiMode";
// import Counter from "./components/Counter/Counter";
// import Application from "./components/Form/Application";
// import Skills from "./components/Skills/Skills";

function App() {
  // const skills = ["HTML", "CSS", "JavaScript"];

  return (
    <AppProviders>
      <div className="App">
        {/* <Counter />  <hr />  <Application /> <hr />  <Skills skills={skills} />  <hr /> <MuiMode/> <hr />*/}

        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
