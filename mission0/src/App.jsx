import img1 from "./assets/images/IMG20220309112136.jpg";
import img2 from "./assets/images/IMG20230729102244.jpg";
import img3 from "./assets/images/IMG20231228171808.jpg";

import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header/Header";
import Title from "./components/Title";

function App() {
  return (
    <div className="main">
      <Header />
      <Title />

      <div className="grid">
        <div className="grid-item">
          <Content text="Lorem ipsum" subText="Est venenatis" img={img1} />
        </div>
        <div className="grid-item">
          <Content text="Lorem ipsum" subText="Est venenatis" img={img2} />
        </div>
        <div className="grid-item">
          <Content text="Lorem ipsum" subText="Est venenatis" img={img3} />
        </div>
        <div className="grid-item">
          <Content text="Lorem ipsum" subText="Est venenatis" img={img1} />
        </div>
        <div className="grid-item">
          <Content text="Lorem ipsum" subText="Est venenatis" img={img2} />
        </div>
        <div className="grid-item">
          <Content text="Lorem ipsum" subText="Est venenatis" img={img3} />
        </div>
      </div>
    </div>
  );
}

export default App;
