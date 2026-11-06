function Header() {
  return(
    <div>
      <h1>Welcome to the online course</h1>
    </div>
  );
}

function Courselist() {
  return (
    <div>
      <h2>Couselists</h2>
      <p>python</p>
      <p>java</p>
      <p>frontend</p>
    </div>
  );
}

function Testimonials(){
  return(
    <div>
      <h2>Tests</h2>
      <p>python exam</p>
      <p>java exam</p>
    </div>
  );
}

function Footer() {
  return <p>Copyrights 2026</p>;
}

function App() {
  return (
    <div>
      <Header />
      <Courselist />
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default App;