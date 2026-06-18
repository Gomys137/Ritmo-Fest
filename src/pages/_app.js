// pages/_app.js
import '../styles/globals.css'
import '../styles/Header.css'
import '../styles/Hero.css'
import '../styles/Lineup.css'
import '../styles/Tickets.css'
import '../styles/Schedule.css'  

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp