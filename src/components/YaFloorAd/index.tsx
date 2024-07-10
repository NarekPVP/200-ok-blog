import React, { useEffect, useRef } from "react";

export const YaFloorAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    window.yaContextCb.push(() => {
      // @ts-ignore
      Ya.Context.AdvManager.render({
        blockId: "R-A-10055653-1",
        type: "floorAd",
        platform: "touch",
      });
    });

    // Create script element
    const script = document.createElement("script");
    // script.type = "text/javascript";
    script.innerHTML = `
window.yaContextCb.push(()=>{
	Ya.Context.AdvManager.render({
		"blockId": "R-A-10055653-1",
		"type": "floorAd",
		"platform": "touch"
	})
})
    `;

    // Append script to the ref element
    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    // Clean up script on unmount
    return () => {
      if (adRef.current) {
        adRef.current.removeChild(script);
      }
    };
  }, []);

  return <div ref={adRef}></div>;
};

export default YaFloorAd;
