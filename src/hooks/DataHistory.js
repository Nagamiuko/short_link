import axios from "axios";
import { useEffect , useState } from "react";
import { serverAPI } from "../server";

const useFetchHistory = () =>{
   const [datahistory , setDataHistory] = useState("")
   const [loading,setLoading] = useState(false)
   const [error, setError] = useState()

   useEffect(() =>{
     const fetch = async () => {
        setLoading(true)
        try{
           const res = await axios.get(`${serverAPI}/api/get-history`)
           setDataHistory(res.data.datahistory)
        }catch(err){
          setError(err)
        }
       setLoading(false)
     }

      fetch()
   },[])
    return {datahistory , error , loading} 
}
export default useFetchHistory