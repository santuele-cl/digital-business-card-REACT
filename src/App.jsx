import './App.css';
import Hero from './Hero.jsx'
import Profile from './Profile.jsx'
import Interest from './Interest.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'

const App = () => (
  <div className="max-w-xs mx-auto my-8 text-white bg-gray-600 rounded-lg overflow-hidden text-center">
    <Hero />
      <main className="p-8 pb-0">
        <Profile />
        <div className='my-8'>
          <About />
          <Interest />
        </div>
      </main>
    <Footer />
  </div>
)

export default App;