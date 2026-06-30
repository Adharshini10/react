
import './index.css';  
import Card from './Card.jsx';
import Employee from './Emp.jsx';

function App(){
return(
  <>
<Card/>
<Employee name="hello" batch={100} Address="hyd" isemp={false}/>
<Employee name="hiee" batch={200} Address="japan" isemp={true}/>
  </>
)
}
export default App;
