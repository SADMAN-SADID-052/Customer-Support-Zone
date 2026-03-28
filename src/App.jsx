import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  return (
    <div>
      <div className='bg-[#F5F5F5]'>
      <Navbar />
      <Banner inProgress={inProgress} resolved={resolved} />
      </div>
    </div>
  );
}

export default App;