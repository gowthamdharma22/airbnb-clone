import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"
import Data from "./Data"

export default function App() {
  const data=Data.map(data=>{
    return(
      <Card
      key={data.id}
      {...data}
      />
    )
  })
  return (
    <div>
        <Navbar />
        <Main />
        <section className="cards-list">
            {data}
        </section>
    </div>
)
}
