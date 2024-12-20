import React, { useState, useRef, useEffect } from 'react';
import runJarvisMarchWithAnimation from './JarvisMarch';
import runKirkpatrickSeidelWithAnimation from './KirkpatrickSeidel';
import './Canvas.css';
import RuntimeInfo from './RuntimeInfo'; // Importing the RuntimeInfo component

function Canvas() {
  const canvasRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1); // Default animation speed
  //added newly
  const [runtime, setRuntime] = useState(0); // State variable to hold runtime information

  const drawPoint = (x, y) => {
    const ctx = canvasRef.current.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#000';
      ctx.fill();
      ctx.closePath();
    }
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const redrawPoints = () => {
    clearCanvas();
    points.forEach(point => {
      drawPoint(point[0], point[1]);
    });
  };

  const handleClick = event => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setPoints([...points, [x, y]]);
    drawPoint(x, y);
  };

  const handleClear = () => {
    setPoints([]);
    clearCanvas();
    setRuntime(0); // Reset the runtime to 0
  };

  const generateRandomPoints = () => {
    const newPoints = [];
    for (let i = 0; i < 100; i++) { // Adjust the number of random points as needed
      const x = Math.random() * canvasRef.current.width;
      const y = Math.random() * canvasRef.current.height;
      newPoints.push([x, y]);
      drawPoint(x, y);
    }
    setPoints([...points, ...newPoints]);
  };


  const runJarvisMarch = async () => {
    const startTime = performance.now(); // Record start time
    await runJarvisMarchWithAnimation(points, redrawPoints, animationSpeed);
    const endTime = performance.now(); // Record end time
    const totalTime = (endTime - startTime) /1000 ; // Calculate runtime
    setRuntime(totalTime); // Update runtime state
  };

  const runKirkpatrickSeidel = async () => {
    const startTime = performance.now(); // Record start time
    await runKirkpatrickSeidelWithAnimation(points, redrawPoints, animationSpeed);
    const endTime = performance.now(); // Record end time
    const totalTime =  (endTime - startTime) /1000 ; // Calculate runtime
    setRuntime(totalTime); // Update runtime state
  };

  const skipAnimation = () => {
    // we can adjust the speed value as needed or implement a way to dynamically change it
    setAnimationSpeed(0); // Set animation speed to 0 to skip animation
  };
  
  const spaceStyle = {
    marginTop: '20px' 
  };
  const spaceStyle1 = {
    marginBottom: '0px' 
  };


  useEffect(() => {
    redrawPoints();
  }, [points]);

  return (
    <div className="canvas-container" style={{ marginBottom: "30px" }}>
      <canvas ref={canvasRef} width="1500px" height="700px" onClick={handleClick} style={{ border: "solid 4px #000000 ", borderRadius: "10px", marginTop: "100px"}} className="canvas"></canvas>

      <div style={spaceStyle}></div>
      <div>
      <button onClick={handleClear} className='custom-button1 '>Clear Canvas</button>
      <button onClick={generateRandomPoints} className='custom-button'>Generate Random Points</button>
      <button onClick={runJarvisMarch} className='custom-button'>Run Jarvis March</button>
      <button onClick={runKirkpatrickSeidel} className='custom-button'>Run Kirkpatrick–Seidel</button>
      <button onClick={skipAnimation} className='custom-button'>Skip Animation</button></div>
      <div style={spaceStyle1}></div>
      <div style={spaceStyle1}></div>
      {/* Render RuntimeInfo component to display runtime information */}
      <RuntimeInfo runtime={runtime} />
    </div>
  );
}

export default Canvas;
