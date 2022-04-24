import axios from  'axios';

const url ="https://covid19.mathdro.id/api";
export const fetchData = async () =>{
try{
  const {data:{ confirmed , recovered , deaths , lastUpdate}} = await axios.get(url);
  return {confirmed , recovered , deaths , lastUpdate}
}catch(error){
   
   }
}
/*export const  fetchDailyData = async () => {
  try{
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((data) => ({
      confirmed: data.confirmed.total,
      deaths:data.deaths.total,
      date:data.reportDate,
    }));
    console.log(modifiedData);
    return modifiedData ;
  }catch(error){
    console.log(error);
  }
}*/