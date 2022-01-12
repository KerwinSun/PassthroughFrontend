import { useState } from "react";
import axios from "axios";

const baseURL = "http://143.110.178.16:9000/passthrough/api/v1/executeCommand?cmd="
const Console = () => {
  const [name, setName] = useState("");

  const submitCommand = (event) => {
    event.preventDefault();
    axios.get(baseURL+name).then((response) => {
      console.log(response.data);
    });
  }

  const getCommand = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={submitCommand}>
      <label>Enter your command:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
};

export default Console;