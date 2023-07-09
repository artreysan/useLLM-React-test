import './App.css';
import useLLM  from 'usellm'; // Asegúrate de que el nombre del módulo es correcto y está instalado en tu proyecto
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const llm = useLLM({
    serviceUrl: 'https://usellm.org/api/llm'
  });

  return (
    <div>
      <button
        onClick={async () => {
          const data = await llm.chat({
            messages: [{ role: "user", content: "dame una lista de lenguajes faciles de aprender" }],
            stream: true,
            onStream: ({message}) =>  setResult(message.content)
          });
          console.log(data);
        }}
      >
        Chat
      </button>
      <div style={{whiteSpace : "pre-wrap"}}>
        <span>
          {result}
        </span>
      </div>
    </div>
  );
}

export default App;
