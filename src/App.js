import './App.css';

function Header (){
  return (
      <>
          <Title/>
          <h2 className="title">I am Header Component</h2>
      </>
  )
}

function Footer() {
    return (
        <>
            <Title/>
            <h2>I am Footer Component</h2>
        </>

    )

}

function Content() {
    return(
        <>
            <Title/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nihil quaerat rerum vitae voluptates! A atque blanditiis cumque dolores eum laudantium minus necessitatibus, odio reprehenderit repudiandae sed, sit soluta, voluptatibus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nihil quaerat rerum vitae voluptates! A atque blanditiis cumque dolores eum laudantium minus necessitatibus, odio reprehenderit repudiandae sed, sit soluta, voluptatibus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nihil quaerat rerum vitae voluptates! A atque blanditiis cumque dolores eum laudantium minus necessitatibus, odio reprehenderit repudiandae sed, sit soluta, voluptatibus!</p>
        </>
    )
}
function Title() {
    return (
        <div>
            React
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;