function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <a href="http://localhost:3000">Products</a>
          </li>
          <li>
            <a href="http://localhost:3000">Stockists</a>
          </li>
          <li>
            <a href="http://localhost:3000">About us</a>
          </li>
        </ul>
        <div className="header__middle">
          <h2>Tolv</h2>
        </div>
        <div className="header__search">
          <i className="fas fa-search"></i>
        </div>
      </header>

      <main>
        <div className="wrapper">
          <div className="wrapper__photo"></div>
          <div className="wrapper__right">
            <h1>
              Eyes rest from an afternoon in the sun. Smooth textures feel cool
              on bare feet and skin.
            </h1>
            <p>
              <span>Featuring </span>
              <a href="http://localhost:3000">Kitsune sofa</a>
              <span>, </span>
              <a href="http://localhost:3000">armchair</a>
              <span> and </span>
              <a href="http://localhost:3000">I-O coffee table</a>
              <a href="http://localhost:3000">(steel base)</a>
            </p>
          </div>
        </div>

        <div className="middle">
          <h1>Time for Living</h1>
          <p>
            Take time for life’s little moments. Browsing the news as you eat
            breakfast. Setting the table for hungry guests. Sinking in to your
            favourite armchair. At Tolv, your daily rituals are at the heart of
            our design. We make furniture to give you your best day, every day.
          </p>
          <p>
            Find out more
            <a href="http://localhost:3000">About us</a>
          </p>
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
