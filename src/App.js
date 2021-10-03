import React from "react";

function Food({ fav }){ // React가 Food Component로 보내진 모든 정보를 가져온다. props.fav == { fav }
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food fav="kimchi" /> {/* food component에 fav라는 이름의 property를 kimchi라는 value로 보냄 */}
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukummi" />
    </div>
  );
}

export default App;
