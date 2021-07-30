function App() {
  // state = {
  //   backgroundColor : "white",
  //   transition : "all 0.1s linear",
  //   boxShadow : "0px 5px 10px 0px rgba(0, 0, 0, 0.25)"
  // }
  return (
    <>
      <header id="header" onScroll="scrollHandler">
        <ul>
          <li>
            <a href="https://minsoo59.github.io/tolv/">Products</a>
          </li>
          <li>
            <a href="https://minsoo59.github.io/tolv/">Stockists</a>
          </li>
          <li>
            <a href="https://minsoo59.github.io/tolv/">About us</a>
          </li>
        </ul>
        <div className="header__middle">
          <h2>
            T<div>o</div>lv
          </h2>
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
              <a href="https://minsoo59.github.io/tolv/">Kitsune sofa</a>
              <span>, </span>
              <a href="https://minsoo59.github.io/tolv/">armchair</a>
              <span> and </span>
              <a href="https://minsoo59.github.io/tolv/">I-O coffee table</a>
              <a href="https://minsoo59.github.io/tolv/">(steel base)</a>
            </p>
          </div>
        </div>
        <div className="middle__title">
          <h1>Time for Living</h1>
          <p>
            Take time for life’s little moments. Browsing the news as you eat
            breakfast. Setting the table for hungry guests. Sinking in to your
            favourite armchair. At Tolv, your daily rituals are at the heart of
            our design. We make furniture to give you your best day, every day.
          </p>
          <p>
            Find out more
            <a href="https://minsoo59.github.io/tolv/"> About us</a>
          </p>
        </div>
        <div className="middle__grid">
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Cherry</span>
              <span>Sofa</span>
              <span>➡</span>
            </div>
          </div>
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Figuma</span>
              <span>Dining Chair</span>
              <span>➡</span>
            </div>
          </div>
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Inlay</span>
              <span>Dining Chair</span>
              <span>➡</span>
            </div>
          </div>
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Bourbon</span>
              <span>Desk</span>
              <span>➡</span>
            </div>
          </div>
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Copal</span>
              <span>Sofa</span>
              <span>➡</span>
            </div>
          </div>
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Kitsune</span>
              <span>Armchair</span>
              <span>➡</span>
            </div>
          </div>
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Kile</span>
              <span>Coffe Table</span>
              <span>➡</span>
            </div>
          </div>
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Mooli</span>
              <span>Coffee Table</span>
              <span>➡</span>
            </div>
          </div>
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Com</span>
              <span>Dining Chair</span>
              <span>➡</span>
            </div>
          </div>
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Portobello</span>
              <span>Sofa(wood base)</span>
              <span>➡</span>
            </div>
          </div>
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Papa</span>
              <span>Scatter Cushion</span>
              <span>➡</span>
            </div>
          </div>
          <div className="grid__pic">
            <div className="grid__pic__bg" />
            <div className="grid__pic__text">
              <span>Neuf</span>
              <span>Side Table</span>
              <span>➡</span>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer__upside">
          <div className="footer__upside__items">
            <div>
              <div>Products:</div>
              <div>Lounge Charis</div>
              <div>Sofas</div>
              <div>Daybeds</div>
              <div>Poufs</div>
              <div>Dining Chairs</div>
              <div>Stools</div>
              <div>Tables & Desks</div>
              <div>Storage</div>
            </div>
          </div>
          <div className="footer__upside__items">
            <div>
              <div>Useful informaion:</div>
              <div>Our stockists</div>
              <div>Our designers</div>
              <div>Product care</div>
            </div>
          </div>
          <div className="footer__upside__items">
            <div>
              <div>Company:</div>
              <div>News</div>
              <div>About us</div>
              <div>Contact us</div>
            </div>
          </div>
          <div className="footer__upside__items">
            <div>
              <div>Connect with us:</div>
              <div>Facebook</div>
              <div>Instagram</div>
            </div>
            <div>
              <div>Access to:</div>
              <div>Client login</div>
            </div>
          </div>
        </div>

        <div className="footer__downside">
          <div>All rights reserved Tolv &copy; {new Date().getFullYear()} </div>
          <div> T </div>
        </div>
      </footer>
    </>
  );
}

export default App;
