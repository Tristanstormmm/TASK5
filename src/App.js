import './App.css';
import BarChart from './Charts/ChartOne';
import DoughnutChart from './Charts/ChartTwo';
import LineChart from './Charts/ChartThree';
import PieChart from './Charts/ChartFour';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<BarChart />} />
      <Route path='ChartTwo' element={<DoughnutChart />} />
      <Route path='ChartThree' element={<LineChart />} />
      <Route path='ChartFour' element={<PieChart />} />
    </Routes>
  );
}

export default App;