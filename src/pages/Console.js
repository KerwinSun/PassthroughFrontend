import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://143.110.178.16:9000/passthrough/api/v1/executeCommand?cmd="
const baseResultURL = "http://143.110.178.16:9000/passthrough/api/v1/getCommandOutput"
const Console = () => {
  
  const [command, setCommandBar] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [result, setResultArea] = useState("");

  const submitCommand = (event) => {
    event.preventDefault();
    setResultArea(oldresult => oldresult + "-------------------------------------------------------------------- \n")
    axios.get(baseURL+command).then((response) => {
      setResultArea(oldresult => oldresult + "results for command: " + response.data?.command + "\n")
    });
  }

  const clearconsole = (event) => {
    event.preventDefault();
    setResultArea("")
  }

  const getCommandResult = async () => {
    axios.get(baseResultURL).then((response) => {
      setResultArea(oldresult => oldresult + response.data?.result)
    });
  };

  useEffect(() => {
    setInterval(getCommandResult, 1000);
  }, []);

  return (
    <html>
    <form onSubmit={submitCommand}>
      <div>
      <label>Enter secret key: </label>
        <input 
          type="password" 
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
        <br />
        <label>Enter your command: </label>
        <input 
          type="text" 
          value={command}
          onChange={(e) => setCommandBar(e.target.value)}
        />
      <input type="submit" />
      </div>
      </form>

      <div>
      <label>command results:</label>
        <div>
        <textarea 
          type="textarea" 
          style={{width: "800px", height: "500px"}}
          value={result}
        />
        </div>
      </div>

      <form onSubmit={clearconsole}>
      <div>
      <input type="submit" value="clear console" />
      </div>
      </form>
      </html>
  )
};

export default Console;