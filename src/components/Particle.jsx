import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particlesConfig from "./config/particles-config";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        params={particlesConfig}
      />
    </div>
    
  );
}

export default Particle;
