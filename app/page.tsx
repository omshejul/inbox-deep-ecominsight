"use client"
import { useState } from 'react';
import Heading from './Components/ Heading';
import Bg from './Components/Bg/Bg';
import Sidebar from './Components/Sidebar/Sidebar';
import Card from './Components/Card/Card';
export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabSelect = (index: number) => {
    setActiveTab(index); 
    console.log(index);
    
  };
  return (
    <main>
  <Bg />
<div className="container p-16">

  <Heading className=''>
    Review Inbox
  </Heading>
<div className="flex">
  <Sidebar onTabSelect={handleTabSelect} />
  <div className="m-5">
  </div>
  <Card headText="Coffee?" headSpan="Mail from Marisa Lu">
    hi
  </Card>
    
</div>
</div>
    </main>
  )
}
