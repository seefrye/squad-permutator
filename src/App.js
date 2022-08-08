import './App.css';
import AppComponent from './components/AppComponent';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header />
          <AppComponent />
          <Footer />
      </header>
    </div>
  );
}

export default App;
