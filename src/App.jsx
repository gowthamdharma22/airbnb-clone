import './App.css';
import katie from "./img/katie.png"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Card
        img={katie}
        rat={5.0}
        rc="(6)"
        cou="India"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
