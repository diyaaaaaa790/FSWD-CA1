import React from 'react';
import TestimonialCard from './components/TestimonialCard';

function App(){
  return(
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
      <TestimonialCard name="John Doe" review="The service was amazing, The new features are really wonderful"/>
      <TestimonialCard name="Hema sharma" review="Will recommend this to all my family and friends, really helpful, Thanks a lot"/>

    </div>
  );
};

export default App;