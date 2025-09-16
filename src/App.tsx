import './App.css';
import AboutSection from './components/AboutSection';
import Header from './components/Header';
import Hero from './components/Hero';


function App() {
  return (
    <div className='bg-[url(./assets/images/bg-mob.png)] bg-cover md:bg-[url(./assets/images/bg-box.png)] xl:bg-[url(./assets/images/bg-desk.png)] bg-no-repeat bg-[#efeff2]'>
      <Header />
      <Hero />
      <AboutSection />
    </div>
  );
}

export default App;
