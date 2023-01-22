import Glossary from './components/Glossary/Glossary'
import Header from './components/Header/Header'
import { data } from './source/Source'


function App() {

  return (
    <div className="App">
      <Header />
      <Glossary source={data} />
    </div>
  )
}

export default App
