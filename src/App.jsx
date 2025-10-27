import Contact from "./components/Contact";
import Title from "./components/Title";

const App = () => {
  return (
    <div className="min-h-dvh bg-[#0A0D17] flex ">
      <div className="max-w-[1520px] max-h-[1000px] flex flex-col items-center bg-[#0A0D17] mx-auto ">
        <Title />
        <Contact />
      </div>
    </div>
  );
};

export default App;
