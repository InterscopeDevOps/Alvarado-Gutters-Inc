import React, { useState, useEffect } from "react";
import LoadingWidget from "./LoadingWidget";

function Weather() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="absolute top-2 right-10">
        <LoadingWidget />
      </div>
    );
  }

  return (
    <div className="absolute bottom-3 right-12">
      <div class="elfsight-app-7d747bc5-0ab4-4b1c-b88f-cc05d20bbf43"></div>
    </div>
  );
}

export default Weather;
