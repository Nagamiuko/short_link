import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Content from '../components/content/Content'
import './home.css'
import useFetchHistory from '../hooks/DataHistory'
import History from '../components/history/History'
import { useSelector } from 'react-redux'

const HistoryPage = () => {
   const {history} = useSelector((state)=> state.history)
   const [data , setData] = useState([])
   const [dataview , setDataView] = useState(null)
   const {datahistory} = useFetchHistory();

   useEffect(() => {
      setDataView(history)
      setData(datahistory)
    }, [datahistory,history]);
  const view_page = dataview && dataview.reduce((acc,item) => acc+item.view_page,0) 
  console.log(view_page);
  return (
    <div>
        <header>
           <Header pageHis={1}/>
        </header>
        <section>
            <div className="container">
                <div className="content">
                   <History dataitem={data} view={view_page}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HistoryPage