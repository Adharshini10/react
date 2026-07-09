function List(){
  const fruits=[
    {name:"Apple", no:19},
    {name:"pomegranate",no:1412},
    {name:"banana",no:124},
    {name:"grapes",no:1}
  ]
  const list= fruits.map(fruit =><li key={fruit.name}>{fruit.name}: {fruit.no}</li>);
  return(<ol>{list}</ol>);
}
export default List;
