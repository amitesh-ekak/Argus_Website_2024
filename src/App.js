import React from 'react'
import './App.css'
import NavigationBar from './NavigationBar'
import CarouselSlides from './CarouselSlides'
import Page_2 from './Components/Page_2'
import Page_3 from './Components/Page_3'
import Page_4 from './Components/Page_4'
import Page_5 from './Components/Page_5'
import Manufacturing_Industry from './Components/Manufacturing_Industry'
import Warehousing_Industries from './Components/Warehousing_Industries'
import Construction_Industry from './Components/Construction_Industry'
import Transport_Industry from './Components/Transport_Industry'
import Retail_Industry from './Components/Retail_Industry'
import Use_Case from './Components/Use_Case'
function App() {
  return (
    <div>
      <NavigationBar/>
      <CarouselSlides/>
      <Page_2/>
      <Page_3/>
      <Page_4/>
      <Page_5/>
      <Manufacturing_Industry/>
      <Warehousing_Industries/>
      <Construction_Industry/>
      <Transport_Industry/>
      <Retail_Industry/>
      <Use_Case/>
    </div>
  )
}

export default App

