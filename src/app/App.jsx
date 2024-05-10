import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routes from "app/Router";

const App = () => {
  const content = useRoutes(routes);
  return (
    <ThemeProvider>
      {content}
    </ThemeProvider>
  );
}

export default App;
