import './App.css';
import useLLM  from 'usellm'; // Asegúrate de que el nombre del módulo es correcto y está instalado en tu proyecto

function App() {
  const llm = useLLM({
    serviceUrl: 'https://usellm.org/api/llm'
  });

  return (
    <div>
      <button
        onClick={async () => {
          const data = await llm.chat({
            messages: [{ role: "user", content: "Hello, how are you?" }]
          });
          console.log(data);
        }}
      >
        Chat
      </button>
    </div>
  );
}

export default App;
