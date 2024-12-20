// Function to run Jarvis March algorithm with step-by-step animation
const runJarvisMarchWithAnimation = async (points, redrawPoints,animationSpeed) => {
    if (points.length < 3) {
      alert('At least 3 points are needed to run Jarvis March algorithm.');//checks if there are atleast threee points otherwise return   
      return;
    }
  
    const canvas = document.querySelector('canvas'); //intializing 2D canvas
    const ctx = canvas.getContext('2d');
    const convexHull = [];
    let startPoint = points.reduce((prev, current) => (prev[1] < current[1]) ? prev : current);
    let currentPoint = startPoint;
    const delay = animationSpeed === 0 ? 0 : 200 / animationSpeed;
    
    // added newly
    // Initialize variables for runtime analysis
    const startTime = performance.now();
    let totalTime = 0;

    do {
      convexHull.push(currentPoint);
      let nextPoint = points[0];
      for (let i = 1; i < points.length; i++) {
        if (points[i] === currentPoint) continue;
        let cross = crossProduct(currentPoint, nextPoint, points[i]);
        if (nextPoint === currentPoint || cross < 0 || (cross === 0 && distance(currentPoint, points[i]) > distance(currentPoint, nextPoint))) {
          nextPoint = points[i];
        }
        await drawLineWithDelay(currentPoint, points[i], 'red', delay, 3); // 200ms delay
        await clearCanvasWithDelay(ctx, delay); // Clear canvas with delay
        redrawPoints(); // Redraw points
      }
      await drawLineWithDelay(currentPoint, nextPoint, 'green', delay,3); // 200ms delay
      await clearCanvasWithDelay(ctx, delay); // Clear canvas with delay
      redrawPoints(); // Redraw points
      currentPoint = nextPoint;
    } while (currentPoint !== startPoint);
  
    // Draw convex hull
    ctx.beginPath();
    ctx.moveTo(convexHull[0][0], convexHull[0][1]);//pushing all the selected points into convex hull array
    for (let i = 1; i < convexHull.length; i++) {
      ctx.lineTo(convexHull[i][0], convexHull[i][1]);
    }
    ctx.closePath();
    ctx.strokeStyle = '#f00';
    ctx.stroke();
    

    // added newly for runtime
    // Calculate total runtime
    const endTime = performance.now();
    totalTime = (endTime - startTime) / 1000; // Convert to seconds
    console.log(`Total runtime: ${totalTime} seconds`);
  };
  
  // Function to calculate cross product
  const crossProduct = (p1, p2, p3) => {
    return (p2[0] - p1[0]) * (p3[1] - p1[1]) - (p2[1] - p1[1]) * (p3[0] - p1[0]);
  };
  
  // Function to calculate distance between two points
  const distance = (p1, p2) => {
    return Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
  };
  
  // Function to draw a line between two points with a specific color
  const drawLineWithDelay = (p1, p2, color, delay,boldWidth) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.strokeStyle = color;
        ctx.lineWidth = boldWidth;
        ctx.stroke();
        resolve();
      }, delay);
    });
  };
  
  // Function to clear the canvas with a delay
  const clearCanvasWithDelay = (ctx, delay) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const canvas = document.querySelector('canvas');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        resolve();
      }, delay);
    });
  };
  
  export default runJarvisMarchWithAnimation;
  