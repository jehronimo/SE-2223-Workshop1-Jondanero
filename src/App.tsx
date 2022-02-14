import React from 'react';
import './App.css';
import ProductCard from './Components/ProductCard';
import CountdownTimer from './Components/CountdownTimer';
import Pumba from './images/pumba.jpg';
import Susky from './images/susky.jpg';
import Cap from './images/cap.jpg';



function App() {
  return (
<>
    <div>
      <CountdownTimer endDate={new Date("March 15, 2022")}></CountdownTimer>
    </div>

    <div style={{display : 'flex', overflow: 'scroll'}}>
      <ProductCard name='Pumba Shirt' originalPrice={100.00} image={Pumba}></ProductCard>
      <ProductCard name='Susky Face Wallpaper' originalPrice={200.00} markedDownPrice={140.00} image={Susky}></ProductCard>
      <ProductCard name='Sunflower Cap' originalPrice={50.50} markedDownPrice={50.40} image={Cap}></ProductCard>
      <ProductCard name='Pumba Shirt' originalPrice={100.00} image={Pumba}></ProductCard>
      <ProductCard name='Susky Face Wallpaper' originalPrice={200.00} markedDownPrice={140.00} image={Susky}></ProductCard>
      <ProductCard name='Sunflower Cap' originalPrice={50.50} markedDownPrice={50.40} image={Cap}></ProductCard>
      <ProductCard name='Pumba Shirt' originalPrice={100.00} image={Pumba}></ProductCard>
      <ProductCard name='Susky Face Wallpaper' originalPrice={200.00} markedDownPrice={140.00} image={Susky}></ProductCard>
      <ProductCard name='Sunflower Cap' originalPrice={50.50} markedDownPrice={50.40} image={Cap}></ProductCard>
    </div>

    <div>
      <CountdownTimer endDate={new Date("February 25, 2022")}></CountdownTimer>
    </div>

    <div style={{display : 'flex', overflow: 'scroll'}}>
      <ProductCard name='Pumba Shirt' originalPrice={100.00} image={Pumba}></ProductCard>
      <ProductCard name='Susky Face Wallpaper' originalPrice={200.00} markedDownPrice={140.00} image={Susky}></ProductCard>
      <ProductCard name='Sunflower Cap' originalPrice={50.50} markedDownPrice={50.40} image={Cap}></ProductCard>
      <ProductCard name='Pumba Shirt' originalPrice={100.00} image={Pumba}></ProductCard>
      <ProductCard name='Susky Face Wallpaper' originalPrice={200.00} markedDownPrice={140.00} image={Susky}></ProductCard>
      <ProductCard name='Sunflower Cap' originalPrice={50.50} markedDownPrice={50.40} image={Cap}></ProductCard>
      <ProductCard name='Pumba Shirt' originalPrice={100.00} image={Pumba}></ProductCard>
      <ProductCard name='Susky Face Wallpaper' originalPrice={200.00} markedDownPrice={140.00} image={Susky}></ProductCard>
      <ProductCard name='Sunflower Cap' originalPrice={50.50} markedDownPrice={50.40} image={Cap}></ProductCard>
    </div>
</>
  );
}

export default App;
