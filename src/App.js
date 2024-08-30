import "./App.css";
import qr from './images/image-qr-code.png'
function App() {
  return (
    <main className="container">
      <section className="card">
        <img src={qr} alt="image-qr-code" />
        <section className="text">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </section>
      </section>
    </main>
  );
}

export default App;
