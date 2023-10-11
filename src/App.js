import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const arr = [{ name: "Manish" }, { name: "Shubham" }];
  const filteredData = arr.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>
        {filteredData.map((singleName) => {
          return <li>{singleName.name}</li>;
        })}
      </p>
    </div>
  );
}

export default App;
