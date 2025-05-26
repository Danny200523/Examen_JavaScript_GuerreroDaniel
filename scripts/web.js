class Menu extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      shadow.innerHTML = `
        <style>
          :root {
          --border-color: #444;
          --accent-color: #e10600;
          --bg-color: #f0B27A;
          --text-color: #ffffff;
        }

        header {
          display: flex;
          padding: 1rem;
          width: 100%;
          height: 1%;
          background-color: rgba(250, 215, 160,0.5);
          position: sticky;
          top: 0;
          gap:2rem;
          z-index: 100;
          flex-wrap: wrap;
        }

        .logo {
          height: 200px;
          margin: 3rem;
        }

        nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 7rem;
          padding: 0.5rem;
        }

        nav a {
          padding: 0.5rem;
          text-decoration: none;
          color: var(--text-color);
          font-size: 3rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        nav a:hover {
          color: var(--accent-color);
        }

        .aling{
            display:flex;
            align-items:center;
            justfy-content:center;
        }
        </style>
        <header>
          <a href="./index.html"><img src="../STORAGE/logo.webp" alt="F1 Logo" class="logo" /></a>
          <div class="aling">
          <nav>
          <a href="#reci">Inicio</a>
          <a href="#reci1">Filtrar</a>
          <a href="#reci2">Favoritos</a>
          </nav>
          </div>
        </header>
      `;
    }
  }
  
  customElements.define('menu-header', Menu);
  