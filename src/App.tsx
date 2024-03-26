import './styles/App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  return (
    <main>
      <h1>Trainee</h1>
      <Card name="Giovanna Albuquerque" role="Front-end | UX/UI" />
      <Card name="Lucas Crapino" role="Back-end" />
      <Card name="Nicole Mascaretti" role="Front-end" />
      <Button />
    </main>
  )
}

export default App
