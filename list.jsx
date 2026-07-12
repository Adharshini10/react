function List(){
  const fruits=[
    {name:"Apple", no:19},
    {name:"pomegranate",no:1412},
    {name:"banana",no:124},
    {name:"grapes",no:1}
  ]
 // fruits.sort((a,b) => a.name.localeCompare(b.name));//alphabetical order
//  fruits.sort((a,b) => b.name.localeCompare(a.name));//reverse alphabetical order
//   fruits.sort((a,b) => a.no-b.no);//numerical order
//    fruits.sort((a,b) => b.no-a.no);//reverse numerical order
    
  const list= fruits.map(fruit =><li key={fruit.name}>{fruit.name}: {fruit.no}</li>);
  return(<ol>{list}</ol>);

}
export default List;
