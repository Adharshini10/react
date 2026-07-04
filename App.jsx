
import './index.css';  
import Card from './Card.jsx';
import Employee from './Emp.jsx';
import Usergreeting from './Usergreeting.jsx';
function App(){
return(
  <>
<Card/>
    
<Employee name="hello" batch={100} Address="hyd" isemp={false}/>
<Employee name="hiee" batch={200} Address="japan" isemp={true}/>
<Employee name=" " batch={0} Address=" " isemp={false}/>

<Usergreeting isloggedin={false} name="pooja" />
  </>
)
}
export default App;
