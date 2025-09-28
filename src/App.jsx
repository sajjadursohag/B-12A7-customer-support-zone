import { Suspense } from "react"
import Banner from "./components/Banner"
import Customer from "./components/Customer"
import Footer from "./components/Footer"
import Navbar from "./components/navbar"


const fetchTickets = async () => {
  const res = await fetch("/tickets.json")
  return res.json()
}


function App() {
  const ticketsPromise = fetchTickets()
  
 

  return (
    <div>
      <Navbar>
      </Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
        <Customer ticketsPromise={ticketsPromise}></Customer>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

export default App
