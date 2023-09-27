import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Content from '../components/content/Content'
import './home.css'
import useFetchHistory from '../hooks/DataHistory'
import History from '../components/history/History'

const HistoryPage = () => {
  //  const [count, setCount] = useState(0);
   const [data , setData] = useState([])
   const {datahistory} = useFetchHistory();

   useEffect(() => {
      setData(datahistory)
    }, [datahistory]);

  console.log(data);
  return (
    <div>
        <header>
           <Header pageHis={1}/>
        </header>
        <section>
            <div className="container">
                <div className="content">
                   <History dataitem={data}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HistoryPage