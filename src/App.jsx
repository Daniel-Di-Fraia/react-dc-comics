import './App.css'
//importiamo i componenti creati
import MyFooter from './assets/components/MyFooter'
import MyHeader from './assets/components/MyHeader'
import MyMainPage from './assets/components/MyMainPage'
import Jumbotron from './assets/components/Jumbotron'
function App() {
  

  return (
    <>
      <MyHeader/>
      <Jumbotron/>
      <MyMainPage/>
      <MyFooter/>
    </>
  )
}

export default App
