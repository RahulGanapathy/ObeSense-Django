import React, {useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

const Form = () => {
  const [inputs, setInputs] = useState({
    age:'',
    gender:'',
    height:'',
    weight:'',
    family_history_with_overweight:'',
    calc:'',
    smoke:'',
    favc:'',
    scc:'',
    caec:'',
    ncp:'',
    ch2o:'',
    faf:'',
    tue:'',
    mtrans:''
  });

  const [pred, setPred] = useState(null);

  const handleChange = (e) => {
    const { name,value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]:value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { age,gender,height,weight,family_history_with_overweight,calc,smoke,favc,scc,caec,ncp,ch2o,faf,tue,mtrans } = inputs;
    const inputdata = {
      Age:age,
      Gender:gender,
      Height:height,
      Weight:weight,
      CALC:calc,
      FAVC:favc,
      NCP:ncp,
      SCC:scc,
      SMOKE:smoke,
      CH2O:ch2o,
      family_history_with_overweight:family_history_with_overweight,
      FAF:faf,
      TUE:tue,
      CAEC:caec,
      MTRANS:mtrans
    };

    const response = await fetch('http://127.0.0.1:8000/classify/', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputdata),
    });

    const output = await response.json();
    const { pred } = output;

    setPred(pred);
  };

  const gen_opt = [
    {label:"Male",value:"Male"},
    {label:"Female",value:"Female"},
  ]

  const bin_opt = [
    {label:'Yes',value:'yes'},
    {label:'No',value:'no'} 
  ]

  const ord_opt = [
    {label:'Always',value:'Always'},
    {label:'Frequently',value:'Frequently'},
    {label:'Sometimes',value:'Sometimes'},
    {label:'Never',value:'no'},
  ]

  const trans_opt =[
    {label:'Walk',value:'Walking'},
    {label:'Cycle',value:'Bike'},
    {label:'Bike',value:'Motorbike'},
    {label:'Car',value:'Automobile'},
    {label:'Public Transportation',value:'Public_Transportation'},
  ]
  
  return (
    <div className="Form">
      <nav>
        <Link to='/' style={{ textDecoration: 'none' }}><h2>ObeSense</h2></Link>
      </nav>
      <div id='form-logo'></div>
      <div id='form'>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <p></p>
              <tr><td>Age:</td><td><input type='number' onChange={handleChange} value={inputs.age} name='age'></input></td></tr>
              <tr><td>Gender:</td><td><select onChange={handleChange} value={inputs.gender} name='gender' className='drop'>{gen_opt.map(opt=>(<option value={opt.value}>{opt.label}</option>))}</select></td></tr>
              <tr><td>Height:</td><td><input type='number' step="0.01" onChange={handleChange} value={inputs.height} name='height'></input></td></tr>
              <tr><td>Weight:</td><td><input type='number' step="0.01" onChange={handleChange} value={inputs.weight} name='weight'></input></td></tr>
              <tr><td>Does you family have anyone with Overweight?</td><td><select onChange={handleChange} value={inputs.family_history_with_overweight} name='family_history_with_overweight' className='drop'>{bin_opt.map(opt=>(<option value={opt.value}>{opt.label}</option>))}</select></td></tr>
              <tr><td>How often do you drink alcohol?</td><td><select onChange={handleChange} value={inputs.calc} name='calc' className='drop'>{ord_opt.map(opt=>(<option value={opt.value}>{opt.label}</option>))}</select></td></tr>
              <tr><td>Do you smoke?</td><td><select onChange={handleChange} value={inputs.smoke} name='smoke' className='drop'>{bin_opt.map(opt=>(<option value={opt.value}>{opt.label}</option>))}</select></td></tr>
              <tr><td>Do you eat high caloric food frequently?</td><td><select onChange={handleChange} value={inputs.favc} name='favc' className='drop'>{bin_opt.map(opt=>(<option value={opt.value}>{opt.label}</option>))}</select></td></tr>
              <tr><td>Do you monitor the calories you eat daily?</td><td><select onChange={handleChange} value={inputs.scc} name='scc' className='drop'>{bin_opt.map(opt=>(<option value={opt.value}>{opt.label}</option>))}</select></td></tr>
              <tr><td>Do you eat any food between meals?</td><td><select onChange={handleChange} value={inputs.caec} name='caec' className='drop'>{ord_opt.map(opt=>(<option value={opt.value}>{opt.label}</option>))}</select></td></tr>
              <tr><td>How many main meals do you have daily?</td><td><input type='number' onChange={handleChange} value={inputs.ncp} name='ncp'></input></td></tr>
              <tr><td>How much water do you drink daily?</td><td><input type='number' step="0.1" onChange={handleChange} value={inputs.ch2o} name='ch2o'></input></td></tr>
              <tr><td>How often do you have physical activity?</td><td><input type='number' onChange={handleChange} value={inputs.faf} name='faf'></input></td></tr>
              <tr><td>How much time do you spend on cell phone and other devices?</td><td><input type='number' step="0.1" onChange={handleChange} value={inputs.tue} name='tue'></input></td></tr>
              <tr><td>Which transportation do you usually use?</td><td><select onChange={handleChange} value={inputs.mtrans} name='mtrans' className='drop'>{trans_opt.map(opt=>(<option value={opt.value}>{opt.label}</option>))}</select></td></tr>
            </tbody>
          </table>
          <div><p></p></div>
          <input type='submit' value="Predict" className='btn' id='predict-btn'></input>
        </form>
      </div>
        {pred !== null && <p id='OP'>Status: {pred}</p>}
    </div>
  );
}

export default Form;