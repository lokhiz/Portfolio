import { ArrowUpRight } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <header>
          <div className='headerContent'>
            <h1 className='headerTitle'>Etienne Léauté</h1>
            <div className='contactContainer'>
              <a href="mailto:l.etienne2635@gmail.com" className='emailContainer'>
                <p className='emailLink'>l.etienne2635@gmail.com</p>
                <ArrowUpRight />
              </a>
              <p className='phoneNumber'>+33 7 61 40 04 21</p>
            </div>
          </div>
      </header>

    </div>
  );
}

export default App;