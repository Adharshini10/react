
import './index.css';  
import Card from './Card.jsx';
import Employee from './Emp.jsx';
import Usergreeting from './Usergreeting.jsx';
import List from './list.jsx';
import Button from './Button.jsx';
import Eventhandler from './Eventhandler.jsx';
import Usestate from './Usestate.jsx';
function App() {
  return (
    <>
      <Card />
      <hr />

      <Employee name="hello" batch={100} Address="hyd" isemp={false} />
      <Employee name="hiee" batch={200} Address="japan" isemp={true} />
      <Employee name=" " batch={0} Address=" " isemp={false} />

      <Usergreeting isloggedin={false} name="pooja" />
      <hr />

      <Button />
      <br />
      <hr />

      <Eventhandler />
      <hr />
      <Usestate/>
    </>
  );
}

export default App;
