import Head from "./Head/Head";
import Box from "./Box/Box";
import "./App.css";
export default function App() {
  return (
    <div>
      <Head />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box />
        </div>
      </div>
    </div>
  );
}
