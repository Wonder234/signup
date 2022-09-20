import {useState} from 'react'
import './App.css';

function App() {
  const[data,setdata]=useState(false)
const[task,setask]=useState({
  username:"",
  firstname:"",
  secondname:"",
  email:"",
  sex:"",
  password:"",
  confirm:"",
  friend:false,
  times:""
})
function setting(event){
  event.preventDefault()
  const{name,value,checked,type}=event.target
  setask(prev=>{
   return{
    ...prev,[name]:type==="checkbox"? checked: value
   }
  })
}
function sub(event){
 event.preventDefault()
 setdata(!data)
}
  return (
    <div className="App">
      <h2 className='head'>WONDER</h2> <br />
      <span  className='spans'>sign up</span>
      <br />
      <section>
        <form  onSubmit={sub} className="form">  
        Firstname:
<input type="text" placeholder='input your firstname' name='firstname' value={task.firstname} onChange={setting}/><br />
Secondname:
<input type="text" placeholder='input second name'name='secondname'  value={task.secondname} onChange={setting}/><br />
Username:
<input type="text" placeholder='username' name='username' value={task.username} onChange={setting} /><br />
Email:
<input type="email" name="email" value={task.email} onChange={setting} placeholder="input your email"/><br />
Password:
<input type="password" name="password" value={task.password} onChange={setting} placeholder="password" /><br />
Re-type
<input type="password" name="confirm" value={task.confirm}  onChange={setting} placeholder="confirm"/><br />
Date of birth :
<input type="date" name="times" value={task.times} onChange={setting} /><br />
<label htmlFor="friend">Are you friendly ?</label>

<input type="checkbox" name="friend" id="friend"checked={task.friend} onChange={setting} />
<br />
<fieldset className='field'>
  <legend className='legend'>sex</legend>
  
  <input type="radio" name="sex" value="male" checked={task.sex==="male"} onChange={setting} />
  <label htmlFor="male">male</label><br />
  
  <input type="radio" name="sex" value="female"  checked={task.sex==="female"} onChange={setting}/>
  <label htmlFor="female">female</label>
</fieldset>
<button className='submit'>submit</button>
        </form>
      </section>
      <div >
        {data && (
          <div className='modal-body'>
            <div className="overlay"></div>
            <div className="content">
            <h2>Congratulation!!</h2>
            <button onClick={sub} className="modal-btn">ok</button>
            
            <h4> your sign up is successful!</h4>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
