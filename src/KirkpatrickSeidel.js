// Function to run Kirkpatrick–Seidel algorithm with step-by-step animation
const runKirkpatrickSeidelWithAnimation = async (points, redrawPoints,animationSpeed) => {
    if (points.length < 3) {
        alert('At least 3 points are needed to run Kirkpatrick–Seidel algorithm.');
        return;
    }
    const delay = animationSpeed === 0 ? 0 : 200 / animationSpeed;
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const convexHull = [];
    // Initialize variables for runtime analysis
    const startTime = performance.now();
    let totalTime = 0;
  
    // Sort points based on x-coordinate
    points.sort((a, b) => a[0] - b[0]);
  
    // Recursive function to find upper convex hull
    const findUpperHull = async (points) => {
        const upper = [];
  
        for (let i = 0; i < points.length; i++) {
            while (upper.length >= 2 &&
                crossProduct(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0) {
                upper.pop();
            }
            upper.push(points[i]);
            await drawPointWithDelay(points[i][0], points[i][1], 'blue', delay); // 200ms delay
            await clearCanvasWithDelay(ctx, delay); // Clear canvas with delay
            redrawPoints(); // Redraw points
        }
  
        return upper;
    };
  
    // Recursive function to find lower convex hull
    const findLowerHull = async (points) => {
        const lower = [];
  
        for (let i = points.length - 1; i >= 0; i--) {
            while (lower.length >= 2 &&
                crossProduct(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
                lower.pop();
            }
            lower.push(points[i]);
            await drawPointWithDelay(points[i][0], points[i][1], 'blue', delay); // 200ms delay
            await clearCanvasWithDelay(ctx, delay); // Clear canvas with delay
            redrawPoints(); // Redraw points
        }
  
        return lower;
    };
  
    // Helper function to compute cross product
    const crossProduct = (o, a, b) => {
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    };
  
    // Run Kirkpatrick–Seidel algorithm recursively
    const kirkpatrickSeidelRecursive = async (points) => {
        if (points.length <= 1) {
            return points; // Return points when there's only one or no point
        }
  
        const median = Math.floor(points.length / 2);
        const leftPoints = points.slice(0, median);
        const rightPoints = points.slice(median);
  
        const upperHull = await findUpperHull(leftPoints.concat(rightPoints));
        const lowerHull = await findLowerHull(leftPoints.concat(rightPoints));
  
        // Draw upper hull
        ctx.beginPath();
        ctx.moveTo(upperHull[0][0], upperHull[0][1]);
        for (let i = 1; i < upperHull.length; i++) {
            ctx.lineTo(upperHull[i][0], upperHull[i][1]);
        }
  
        // Draw lower hull in reverse order
        ctx.moveTo(lowerHull[lowerHull.length - 1][0], lowerHull[lowerHull.length - 1][1]);
        for (let i = lowerHull.length - 2; i >= 0; i--) {
            ctx.lineTo(lowerHull[i][0], lowerHull[i][1]);
        }
  
        // Close the path
        ctx.closePath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();
    };
  
    // Call the recursive function to find the convex hull
    await kirkpatrickSeidelRecursive(points);


    // Calculate total runtime
    const endTime = performance.now();
    totalTime = (endTime - startTime) / 1000; // Convert to seconds
    console.log(`Total runtime: ${totalTime} seconds`);
};
  
// Function to draw a point on the canvas with a delay
const drawPointWithDelay = (x, y, color, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const canvas = document.querySelector('canvas');
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.closePath();
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

export default runKirkpatrickSeidelWithAnimation;
