
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
      <div className="min-h-screen w-full overflow-x-hidden bg-white text-gray-500 font-normal dark:bg-koyumor-bg dark:text-white transition-colors duration-300 font-inter ">
        <div className="max-w-285 lg:max-w-247.5 2xl:max-w-305 mx-auto px-1 lg:px-2 flex flex-col min-h-screen">
          <Header />
          <main className="grow mt-22 flex flex-col gap-10.5 ">
            <Hero />
            <Skills />
            <Profile />
            <Projects />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
