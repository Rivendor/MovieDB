import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex-container">
      <header className="Movies-header">
        <h1>Movies</h1>
      </header>
      <body>
        <main>
          <div className="Movies-searchbar">
            <input type="text" placeholder="Busque um filme por nome, ano ou gênero..." />
          </div>
          <div className="Movies-card-list">
            <div className="Movies-card-container">
              <img className="Movies-card-image"
                src="https://upload.wikimedia.org/wikipedia/pt/7/7d/Thor_Ragnarok_poster.jpg"
                alt="Thor: Ragnarok" />
              <div>
                <div className="Movies-card-percentage-circle">
                  <h2 className="Movies-card-percentage">75%</h2>
                </div>
                <div className="Movies-card-header-container">
                  <h2 className="Movies-card-header-container-title">Thor: Ragnarok</h2>
                </div>
                <p className="Movies-card-date">25/10/2017</p>
                <p className="Movies-card-overview">A ticking-time-bomb insomniac and a slippery soap salesman channel primal male
                  aggression into a shocking new form of therapy. Their concept catches on, with underground
                    \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an
                    out-of-control spiral toward oblivion.</p>
                <div className="Movies-card-tag-row">
                  <a className="Movies-card-tag" href="#">Ação</a>
                  <a className="Movies-card-tag" href="#">Aventura</a>
                  <a className="Movies-card-tag" href="#">Fantasia</a>
                </div>
              </div>
            </div>
            <div className="Movies-card-container">
              <img className="Movies-card-image"
                src="https://upload.wikimedia.org/wikipedia/pt/7/7d/Thor_Ragnarok_poster.jpg"
                alt="Thor: Ragnarok" />
              <div>
                <div className="Movies-card-percentage-circle">
                  <h2 className="Movies-card-percentage">75%</h2>
                </div>
                <div className="Movies-card-header-container">
                  <h2 className="Movies-card-header-container-title">Thor: Ragnarok</h2>
                </div>
                <p className="Movies-card-date">25/10/2017</p>
                <p className="Movies-card-overview">A ticking-time-bomb insomniac and a slippery soap salesman channel primal male
                  aggression into a shocking new form of therapy. Their concept catches on, with underground
                    \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an
                    out-of-control spiral toward oblivion.</p>
                <div className="Movies-card-tag-row">
                  <a className="Movies-card-tag" href="#">Ação</a>
                  <a className="Movies-card-tag" href="#">Aventura</a>
                  <a className="Movies-card-tag" href="#">Fantasia</a>
                </div>
              </div>
            </div>
            <div className="Movies-card-container">
              <img className="Movies-card-image"
                src="https://upload.wikimedia.org/wikipedia/pt/7/7d/Thor_Ragnarok_poster.jpg"
                alt="Thor: Ragnarok" />
              <div>
                <div className="Movies-card-percentage-circle">
                  <h2 className="Movies-card-percentage">75%</h2>
                </div>
                <div className="Movies-card-header-container">
                  <h2 className="Movies-card-header-container-title">Thor: Ragnarok</h2>
                </div>
                <p className="Movies-card-date">25/10/2017</p>
                <p className="Movies-card-overview">A ticking-time-bomb insomniac and a slippery soap salesman channel primal male
                  aggression into a shocking new form of therapy. Their concept catches on, with underground
                    \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an
                    out-of-control spiral toward oblivion.</p>
                <div className="Movies-card-tag-row">
                  <a className="Movies-card-tag" href="#">Ação</a>
                  <a className="Movies-card-tag" href="#">Aventura</a>
                  <a className="Movies-card-tag" href="#">Fantasia</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
