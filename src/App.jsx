import { AppRoutes } from "./AppRoutes";
import { Analytics } from '@vercel/analytics/react';
import "./global.css";

function App() {

  return (
    <div className="App">
      <AppRoutes />
      <Analytics />
    </div>
  )
}

export default App
