import React from 'react';
import Canvas from './Canvas';
import Theory from './Theory';



function App() {

  const spaceStyle3 = {
    marginTop: '30px' 
  };

  
  return (
    <div>
      
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#0aeae3', padding: '10px 0' }} >
      <h1 style={{ textAlign: 'center' }}>CONVEX HULL VISUALIZATION</h1>
    </div>

      <div style={spaceStyle3}></div>
      <Canvas />
      <Theory/> 
    </div>
  );
}

export default App;
