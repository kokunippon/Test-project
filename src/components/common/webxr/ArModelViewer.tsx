import React from "react";
import "@google/model-viewer";
import "./style/ArModelViewer.module.css";
import ViewArSpace from "./ViewArSpace"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

interface ArModelViewerProps {
  name: string;
  company: string;
  model: string;
  placement?: string;
  poster: string;
  hotspots: Array<{ id: string; position: string; normal: string; name: string }>;
  price: string;
}

const ArModelViewer: React.FC<ArModelViewerProps> = ({
  name,
  company,
  model,
  placement = "floor",
  poster,
  hotspots = [],
  price,
}) => {
  return (
    <div id="card">
      <div className="flex flex-col items-center justify-center bg-[#191919] w-[70vw] h-[35vh] lg:w-[25vw] lg:h-[50vh] md:w-[46vw] md:h-[50vh] sm:w-[60vw] sm:h-[50vh] rounded-3xl shadow-[0px_0px_150px_1px_#75752D]">
        
        <model-viewer
          style={{ width: "100%", height: "60vh", display: "flex" }}
          src={model}
          alt={`A 3D model of an ${name} by ${company}`}
          ios-src=""
          price={price}
          poster={poster} // Poster will be displayed until model is loaded
          shadow-intensity="2"
          camera-controls
          auto-rotate
          ar
          ar-placement={placement}
        >
          {hotspots.map((hotspot) => (
            <div
              key={hotspot.id}
              className="Hotspot flex items-center space-x-2"
              slot={`hotspot-${hotspot.id}`}
              data-position={hotspot.position}
              data-normal={hotspot.normal}
              data-visibility-attribute="visible"
            >
              <button
                className="annotation w-[20px] h-[20px] border border-white bg-[#ffffff9a] rounded-full"
                data-visibility-attribute="visible"
              ></button>
              <div className="pl-2 absolute translate-x-6 w-[10rem] flex items-center text-white backdrop-blur-md border border-white p-1 rounded-full">
                {hotspot.name}
              </div>
            </div>
          ))}
        </model-viewer>
        
        <button
          className=""
          slot="ar-button"
          id="ar-button"
        >
          <div className="text-sm"><ViewArSpace/></div>
        </button> 
      </div>
    </div>
  );
};

export default ArModelViewer;
