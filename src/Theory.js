import React from "react";
import './index.css';
import { useState } from 'react';


const Theory = () => {
  return (
    <div style={{ width: "1300px", margin: "auto" }}>
      <br />
      <hr />
      <h1 class="font-black text-2xl mt-3">Convex Hulls </h1>
      <p>
        A Convex Hull for a given set of points is defined as the smallest
        convex polygon that encloses all points of a set. More intuitively, we
        can imagine it to take the shape of a rubber band that wraps around a
        set of points if they were to stick out of the plane. Convex Hulls have
        numerous applications in a wide variety of fields. For instance, Convex
        Hulls may be used to determine collisions between objects. In order to
        model an object or obstacle defined by a set of points, we can use its
        convex hull. This could be used for planning the path of an object such
        as a car or a robot on a route in order to avoid crashes. In statistics,
        the convex hull is frequently used when a 2-dimensional sample space has
        to be represented in terms of area and not points. More specifically,
        the convex hull of a dataset without its outliers forms the loop of a
        bagplot, or a higher dimensional box-plot.These Computational Geometry concepts also come with
        their own large set of applications, making the Convex Hull an even more
        powerful tool.
      </p>
      <br />
      <hr />
      <h1 class="font-black text-indigo-700 text-2xl mt-3">Jarvis's March</h1>
      <p>
      Jarvis’s march algorithm uses a process called gift wrapping to find the convex hull. 
      It is one of the simplest algorithms for computing convex hull. 
      The working of Jarvis’s march resembles the working of selection sort.
       In selection sort, in each pass, we find the smallest number and add it to the sorted list. 
       Similarly, in Jarvis’s march, we find the leftmost point and add it to the convex hull vertices in each pass. 
       The step by step working of Jarvis’s march algorithm is given below.
      </p>
      <br />
      <h2 class="font-black text-indigo-700 text-2xl mt-3">Working :</h2>
      <p>
      1.Initialization : Choose the point with the lowest y-coordinate. If there are multiple points with the same lowest y-coordinate, choose the one with the lowest x-coordinate. This point is guaranteed to be on the convex hull.
<br/>
    2.Find Next Point : Start from the initial point and find the point that forms the smallest angle with the current point and the positive x-axis. This can be done by iterating over all other points and calculating the angle they form with the current point.
<br/>
    3.Update Current Point : Set the point found in step 2 as the current point on the convex hull.
<br/>
    4.Termination : Stop when the current point is the same as the initial point (i.e., when the algorithm completes a full loop).
      </p><h2 class="font-black text-indigo-700 text-2xl mt-3">Code Explaination :</h2>
      <h2>Function: runJarvisMarchWithAnimation(points, redrawPoints)</h2>
    <p>This function executes the Jarvis March algorithm with step-by-step animation.</p>
    <h3>Parameters:</h3>
    <ul>
        <li><strong>points:</strong> An array of 2D points represented as arrays [x, y].</li>
        <li><strong>redrawPoints:</strong> A callback function to redraw points on the canvas after each step.</li>
    </ul>
    <h3>Description:</h3>
    <ul>
        <li>Checks if there are at least 3 points to proceed with the algorithm.</li>
        <li>Finds the starting point as the point with the lowest y-coordinate.</li>
        <li>Iterates through the points to find the next point on the convex hull.</li>
        <li>Draws lines between the current point and potential next points to visualize the process.</li>
        <li>Clears the canvas and redraws points after each step.</li>
        <li>Continues until the next point is the same as the starting point.</li>
        <li>Draws the convex hull using the obtained points.</li>
    </ul>

    <h2>Function: crossProduct(p1, p2, p3)</h2>
    <p>This function calculates the cross product of three points.</p>
    <h3>Parameters:</h3>
    <ul>
        <li><strong>p1, p2, p3:</strong> Arrays representing 2D points [x, y].</li>
    </ul>
    <h3>Returns:</h3>
    <ul>
        <li>The cross product of the vectors formed by points p1, p2, and p3.</li>
    </ul>

    <h2>Function: distance(p1, p2)</h2>
    <p>This function calculates the Euclidean distance between two points.</p>
    <h3>Parameters:</h3>
    <ul>
        <li><strong>p1, p2:</strong> Arrays representing 2D points [x, y].</li>
    </ul>
    <h3>Returns:</h3>
    <ul>
        <li>The Euclidean distance between points p1 and p2.</li>
    </ul>

    <h2>Function: drawLineWithDelay(p1, p2, color, delay, boldWidth)</h2>
    <p>This function draws a line between two points with a specified color and delay.</p>
    <h3>Parameters:</h3>
    <ul>
        <li><strong>p1, p2:</strong> Arrays representing 2D points [x, y].</li>
        <li><strong>color:</strong> Color of the line.</li>
        <li><strong>delay:</strong> Delay in milliseconds before drawing the line.</li>
        <li><strong>boldWidth:</strong> Width of the line.</li>
    </ul>

    <h2>Function: clearCanvasWithDelay(ctx, delay)</h2>
    <p>This function clears the canvas with a specified delay.</p>
    <h3>Parameters:</h3>
    <ul>
        <li><strong>ctx:</strong> Canvas 2D context.</li>
        <li><strong>delay:</strong> Delay in milliseconds before clearing the canvas.</li>
    </ul>
      <h2 class="font-black text-indigo-700 text-2xl mt-3">Time complexity :</h2>
      <p>
      The time complexity of Jarvis March algorithm is O(nh), where n is the number of input points and h is the number of points on the convex hull. 
      In the worst case, h can be as large as n, leading to a worst-case time complexity of O(n^2).
      </p>
      <p>Let's break down the algorithm and analyze how its time complexity is achieved:</p>

<ol>
  <li><strong>Initialization:</strong> The algorithm starts by selecting the leftmost point as the starting point of the convex hull. This step takes O(n) time since it requires scanning through all the input points once to find the leftmost point.</li>
  
  <li><strong>Main Loop:</strong> The algorithm iterates over all points to find the next point on the convex hull until it reaches the starting point again. At each iteration, it checks all points to determine the one with the smallest polar angle with the current point. This involves computing the polar angle for each point, which takes constant time O(1) per point.</li>
  
  <li><strong>Finding the Next Point:</strong> The time complexity of finding the next point depends on the number of points that need to be checked at each iteration. In the worst case, the algorithm may need to check all n points to find the next point. Therefore, the complexity of this step is O(n).</li>
  
  <li><strong>Updating the Convex Hull:</strong> After finding the next point, the algorithm updates the convex hull by adding the new point and removing redundant points. This operation also takes O(1) time per point.</li>
  
  <li><strong>Termination:</strong> The algorithm terminates when it reaches the starting point again. The number of iterations required to complete the convex hull is bounded by the number of points on the hull, denoted as h.</li>
</ol>

<p>Putting it all together, the time complexity of the Jarvis March algorithm can be expressed as O(nh), where n is the number of input points and h is the number of points on the convex hull. In the worst case, where every point is on the convex hull (i.e., h = n), the time complexity becomes O(n^2). This occurs when the points are arranged in such a way that the algorithm needs to iterate over all points for each point on the convex hull, leading to a quadratic time complexity.</p>

      <hr />
      <h1 class="font-black text-pink-700 text-2xl mt-3">Kirkpatrick–Seidel Algorithm</h1>
      <p>
      The Kirkpatrick-Seidel algorithm is a randomized algorithm for computing the convex hull of a set of points in two-dimensional space. 
      It's an improvement over the Jarvis March algorithm, offering an expected runtime of O(n log h),
       where n is the number of input points and h is the number of points on the convex hull.
      </p>
      <h2 class="font-black text-pink-700 text-2xl mt-3">working :</h2>
      <p>
        1.Divide and Conquer: The algorithm divides the set of points into two subsets based on the x-coordinate of the points.
        <br/>
        2.Recursive Convex Hull: Recursively compute the convex hull of each subset.
        <br/>
        3.Merge Convex Hulls: Merge the convex hulls of the two subsets to form the convex hull of the entire set of points.
        <br/>
        4.Selecting Support Lines: Select a set of support lines that separate the convex hull into smaller regions.
        <br/>
        5.Recursion on Smaller Regions: Recursively apply the algorithm to each smaller region formed by the support lines.
        <br/>
        6.Combine Results: Combine the results of each smaller region to obtain the final convex hull.
      </p>
      <br />
      <h2 class="font-black text-pink-700 text-2xl mt-3">Code Explaination :</h2>
      <h2>Function: runKirkpatrickSeidelWithAnimation(points, redrawPoints)</h2>
    <p>This function executes the Kirkpatrick–Seidel algorithm with step-by-step animation.</p>
    <h3>Parameters:</h3>
    <ul>
        <li><strong>points:</strong> An array of 2D points represented as arrays [x, y].</li>
        <li><strong>redrawPoints:</strong> A callback function to redraw points on the canvas after each step.</li>
    </ul>
    <h3>Description:</h3>
    <ul>
        <li>Checks if there are at least 3 points to proceed with the algorithm.</li>
        <li>Sorts points based on the x-coordinate.</li>
        <li>Finds upper and lower convex hulls recursively.</li>
        <li>Draws lines between points to visualize the process.</li>
        <li>Clears the canvas and redraws points after each step.</li>
        <li>Draws the convex hull using obtained points.</li>
    </ul>

    <h2>Function: drawPointWithDelay(x, y, color, delay)</h2>
    <p>This function draws a point on the canvas with a specified color and delay.</p>
    <h3>Parameters:</h3>
    <ul>
        <li><strong>x, y:</strong> Coordinates of the point.</li>
        <li><strong>color:</strong> Color of the point.</li>
        <li><strong>delay:</strong> Delay in milliseconds before drawing the point.</li>
    </ul>

    <h2>Function: clearCanvasWithDelay(ctx, delay)</h2>
    <p>This function clears the canvas with a specified delay.</p>
    <h3>Parameters:</h3>
    <ul>
        <li><strong>ctx:</strong> Canvas 2D context.</li>
        <li><strong>delay:</strong> Delay in milliseconds before clearing the canvas.</li>
    </ul>
      <h2 class="font-black text-pink-700 text-2xl mt-3">Time complexity :</h2>
      <p>
      The complexity of algorithm is O(n logh) where where n is the number of input points and h is the 
      number of points (non dominated or maximal points, as called in some texts) in the hull.
      </p>
      <p>To understand the time complexity of the Kirkpatrick–Seidel algorithm, let's examine its key steps:</p>

<ol>
  <li><strong>Sorting:</strong> The algorithm begins by sorting the input points based on their x-coordinates. Sorting n points typically takes O(n log n) time using efficient sorting algorithms like quicksort or mergesort.</li>
  
  <li><strong>Divide and Conquer:</strong> After sorting, the algorithm employs a divide-and-conquer strategy to find the convex hull. It recursively divides the set of sorted points into smaller subsets and computes the upper and lower convex hulls of each subset. This process continues until the subsets are small enough to be solved using a brute-force algorithm.</li>
  
  <li><strong>Merging Convex Hulls:</strong> Once the upper and lower convex hulls of each subset are computed, the algorithm merges them to form the final convex hull. The merging step involves finding the tangent lines between the upper and lower hulls and removing any redundant points. This merging process can be performed in linear time O(n) because each point is processed only once during the merging operation.</li>
  
  <li><strong>Runtime Analysis:</strong> The overall time complexity of the Kirkpatrick–Seidel algorithm depends on the number of points on the convex hull, denoted as h. Since the divide-and-conquer step reduces the problem size by a factor of two in each recursive call, the number of recursive calls is O(log n). Additionally, each level of recursion involves sorting and merging steps, each taking O(n) time. Therefore, the total time complexity can be expressed as O(n log h), where n is the number of input points and h is the number of points on the convex hull.</li>
</ol>

<p>In summary, the Kirkpatrick–Seidel algorithm achieves a time complexity of O(n log h) by leveraging the divide-and-conquer strategy and efficient merging techniques to compute the convex hull of a set of points.</p>

      <hr />
      <h2>Runtime Analysis Comparison</h2>

<ol>
  <li>
    <h3>Jarvis March Algorithm:</h3>
    <p>The runtime complexity of the Jarvis March algorithm is O(nh), where:</p>
    <ul>
      <li><strong>n</strong> is the number of points in the input set, and</li>
      <li><strong>h</strong> is the number of points on the convex hull.</li>
    </ul>
    <p>In the worst case, the algorithm scans through all n points multiple times to find each point on the convex hull. This results in a time complexity that depends on the number of points on the convex hull.</p>
    <p>However, in the best-case scenario where the points are already sorted, the time complexity reduces to O(n), but this is rare in practical scenarios.</p>
  </li>
  <li>
    <h3>Kirkpatrick–Seidel Algorithm:</h3>
    <p>The runtime complexity of the Kirkpatrick–Seidel algorithm is O(n log h), where:</p>
    <ul>
      <li><strong>n</strong> is the number of points in the input set, and</li>
      <li><strong>h</strong> is the number of points on the convex hull.</li>
    </ul>
    <p>Unlike Jarvis March, Kirkpatrick–Seidel algorithm achieves a runtime that is more efficient and logarithmic in the number of points on the convex hull.</p>
    <p>It achieves this efficiency by recursively dividing the set of points and computing the upper and lower hulls separately before merging them.</p>
  </li>
</ol>

<p>In summary, while both algorithms aim to compute the convex hull of a set of points, Kirkpatrick–Seidel generally offers better performance due to its more efficient runtime complexity. However, the choice of algorithm may depend on various factors such as the size of the input set, the distribution of points, and the specific requirements of the application.</p>
      <hr />
      <h1 class="font-black text-pink-700 text-2xl mt-3">Conclusion</h1>
      <p>
        
        The Jarvis March algorithm and the Kirkpatrick-Seidel algorithm are both used to compute the convex hull of a set of points in a plane, 
        but they differ significantly in terms of time complexity, implementation complexity, and efficiency. 
        Jarvis March is a simple and intuitive algorithm with a time complexity of O(nh) in the worst case, where n is the 
        number of input points and h is the number of points on the convex hull. However, its efficiency diminishes for large datasets, 
        as it may require O(n^2) operations in the worst case. On the other hand, Kirkpatrick-Seidel is a more sophisticated 
        algorithm with an expected time complexity of O(n log h), achieved through a divide-and-conquer approach and careful 
        selection of support lines. While Kirkpatrick-Seidel offers better average-case performance, especially for larger datasets, 
        its implementation is more complex due to the additional steps involved. Ultimately, the choice between the two algorithms 
        depends on the specific requirements of the problem at hand, with Jarvis March being suitable for simpler scenarios and 
        Kirkpatrick-Seidel being preferred for optimizing performance on larger datasets.
      </p>
      <h1 class="font-black text-pink-700 text-2xl mt-3">Thankyou !!!</h1>
    </div>
  );
};
export default Theory