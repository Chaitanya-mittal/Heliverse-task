import { useEffect, useRef } from "react";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 256,
      DENSITY_DISSIPATION: 3,
      BRIGHTNESS: 0.5,
      SHADING: true, // Color brightness (Recommend lower than 1.0 if BLOOM is true)
      CURL: 15,
      BACK_COLOR: "#0E0F1A",

      // INITIAL: true, // Number of bloom effect iterations
      // SPLAT_FORCE: 6000,
      COLOR_PALETTE: ["#9ACD32", "#FA8072", "#EE82EE"],
      SPLAT_RADIUS: 0.25,
      SPLAT_AMOUNT: 6,
      SUNRAYS_WEIGHT: 0.8,
      BLOOM: true, // Weight of the sunrays effect
      HOVER: true,
    });
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className=" fixed left-0 top-0 z-[0]  h-full w-full "
    ></canvas>
  );
}

export default Canvas;
