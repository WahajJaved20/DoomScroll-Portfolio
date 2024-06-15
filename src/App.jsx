import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { particlesOptions } from './Constants/particleOptions';
import { loadAll } from "@tsparticles/all";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  if (init) {
    return (
      <>

      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
      />
      <HomePage />

      </>
    );
  }

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
