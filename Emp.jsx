import PropTypes from 'prop-types';
function Employee(props){
  return(
     <div className="employee">
      <h4>Name:{props.name}</h4>
      <h4>Batch:{props.batch}</h4>
      <h4>Address:{props.Address}</h4>
      <h4>isEmployee:{props.isemp ? "yes" : "no"}</h4>
     </div>
  )
}
Employee.propTypes={
  name: PropTypes.string,
  batch: PropTypes.number,
  Address: PropTypes.string,
  isemp: PropTypes.bool
}
export default Employee;