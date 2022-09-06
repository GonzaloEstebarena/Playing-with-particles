import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particlesConfig2 from "./config/particles-config2";

function Particleb() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        params={particlesConfig2}
      />
      
    </div>
    
  );
}

export default Particleb;
