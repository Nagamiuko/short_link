import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Content from '../components/content/Content'
import './home.css'
const HomePage = () => {
   const [count, setCount] = useState(0);
   useEffect(() => {
      setCount(count + 1);
    },[]);
  return (
    <div>
        <header>
           <Header view={count}/>
        </header>
        <section>
            <div className="container">
                <div className="content">
                    <Content View={count}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomePage