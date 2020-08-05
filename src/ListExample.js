import React from "react";

function ListExample(props) {
  const [values, setValues] = React.useState([])

  React.useEffect(() => {
    setValues(props.items);
  }, []);

  function reOrderElements(index, item){
    // let newValues = values.splice(0, values.indexOf(item), item)
    // setValues(newValues);
    var newNode = document.createElement("li");
    newNode.innerHTML = item;
    newNode.id = index;
    
    var parentDiv = document.getElementById(index)?.parentNode;
    var sp2 = document.getElementById("0");
    parentDiv.insertBefore(newNode, sp2);

    // var list = document.getElementById("list")
    // list.removeChild(parentDiv);
    return null;
  }

  return (
    <ul id="list">
      {values.map((item, index) => (
        <li key={index} id={`${index}`} onClick={() => reOrderElements(index, item)}>{item}</li>
      ))}
    </ul>
  );
}

export default function RederedList() {
  return <ListExample items={["A", "B", "C"]} />;
}
