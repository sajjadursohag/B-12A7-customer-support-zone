import { Suspense } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/navbar"
import Main from "./components/Main"


const fetchTickets = async () => {
  const res = await fetch("/tickets.json")
  return res.json()
}


function App() {
  const ticketsPromise = fetchTickets();
  
 

  return (
    <div>
      
        <Navbar className="w-11/12 mx-auto py-3">
      </Navbar>
      
      <Banner>

      </Banner>
      <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
      <Main ticketsPromise={ticketsPromise}></Main>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

export default App
