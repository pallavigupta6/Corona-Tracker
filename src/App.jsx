import React from "react";
import Cards from "./components/Cards/Card";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component{
  state = {
   data: {}
  }
  async componentDidMount(){
  const fetchedData  = await fetchData();
  this.setState({data: fetchedData} );
}
 render(){
   const { data } = this.state;

   return(
     <div className={styles.container}>
     <Cards data={data}/>
     <br />
     <Chart data={data}/>
     <br />
     <CountryPicker />
     </div>
   );
 }
}
export default App;
