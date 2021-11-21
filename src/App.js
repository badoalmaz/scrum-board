import { observer } from "mobx-react-lite";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  // const { users, boards } = useStore();
  // console.log(users.toJSON());
  // console.log(boards.active?.sections[0]?.tasks?.toJSON());
  return (
    <>
      <Header />
      <main>
        <Dashboard />
      </main>
    </>
  );
}

export default observer(App); //? перерендеривает компонент при изменении стора
