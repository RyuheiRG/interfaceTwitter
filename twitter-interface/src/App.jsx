import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

const users = [
  {
    userName: 'RyuheiRG',
    name: 'Ryuhei Kuroda'
  },
  {
    userName: 'BlackJaxMobileLegends',
    name: 'blackjax'
  },
  {
    userName: 'BrioMex',
    name: 'BrioMex'
  },
  {
    userName: 'ArnoldoRicardo',
    name: 'Arnoldo Ricardo'
  },
  {
    userName: 'miduDev',
    name: 'Miguel Angel'
  }
]

function App() {
  return (
    <section className='App' >
      {
        users.map(({ userName, name }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
          />
        ))
      }
    </section>
  )
}

export default App
