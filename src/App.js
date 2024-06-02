
import './App.css';
import { useState } from 'react';

function App() {
  const [salary, SetSalary] = useState('');
  const [networth, setNetWorth] = useState('');
  const [dowrey, setDowrey] = useState(null);
  const [profession, setProfession] = useState('');
  const [vehicle, setVehicle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    const data = 0.5 * salary + 0.2 * networth;
    setDowrey(data);

    if (["Enginner", "CA", "IAS", "Dr", "gov"].includes(profession)) {
      setVehicle("four Wheeler");
      setDowrey(dowrey+10000);
    } else {
      setVehicle("cycle, or bike");
    }
  };

  return (
    <div className="App">
      <h1>आपकी शादी मंगलमय हो</h1>
      <h2>Calculate your Dowrey</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={salary}
          placeholder="Enter groom's salary per annum"
          onChange={(e) => { SetSalary(e.target.value); }}
        />
        <input
          type="text"
          value={networth}
          placeholder="Enter bride's father's net worth"
          onChange={(e) => { setNetWorth(e.target.value); }}
        />
        <label>Choose groom's profession</label>
        <select onChange={(e) => { setProfession(e.target.value); }}>
          <option value="">Select Profession</option>
          <option value="Enginner">Engineer</option>
          <option value="CA">CA</option>
          <option value="IAS">IAS</option>
          <option value="Dr">Doctor</option>
          <option value="gov">Government job</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div className='result'>
        <h3>Calculated dowrey</h3>
        {dowrey !== null && (
          <p>{`Dowrey: ${dowrey}+ Vehicle: ${vehicle}`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
