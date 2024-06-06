import { useState } from 'react'
import './App.css'
function App() {

  return (
    <>
      <nav className='nav'>
          <div>
            <img className='logo' src="./public/image.png" alt="Logo Afriplume" />
          </div>
          <div className='parent'>
            <div className='list'>
              <ul>
                <li>
                  Accueil
                </li>
                <li>
                  Genre littéraire <i class='bx bxs-chevron-down'></i>
                </li>
                <li>
                  Ecrire <i class='bx bxs-chevron-down'></i>
                </li>
                <li>
                  Espace auteur
                </li>
              </ul>
            </div>
            <div className='icons-profil'>
              <div className='icons'>
                <ul className='icons-list'>
                    <li>
                    <i class='bx bx-search-alt-2'></i>
                    </li>
                    <li>
                    <i class='bx bx-cart'></i>
                    </li>
                    <li>
                    <i class='bx bxs-bell'></i>
                    </li>
                  </ul>
              </div>
              <div className='profil'>
                <button>
                  <img className='image-profil' src="./public/imag.png" alt="profil-photo" />
                  <span>GerardHo</span> 
                  <i class='bx bxs-chevron-down'></i>
                </button>
              </div>
            </div>
          </div>
      </nav>
      <main>
          <div className='mini-page'>
            <h1 className='headline-text'>Un monde de <span>secret</span> dans la lecture vous appelle !</h1>
            <p className='body-text'>Une plateforme de lecture et d'écriture en ligne conçue dans le <br /> but de connecter les écrivains du continent à des lecteurs.</p>
            <div className='rectangle'></div>
          </div>
          <div className="footer">
            <div className='search-rubrique'>
              <div className='search-livre'>
                <div className='input'>
                  <i class='bx bx-search-alt-2'></i>
                  <input type="text" placeholder='Rechercher un livre' />
                </div>
                <button className='rubrique'>Rubriques <i class='bx bxs-chevron-down'></i></button>
              </div>
              <div className='space-ecrivains'>
                <button className='genre'>Genres littéraires <i class='bx bxs-chevron-down'></i></button>
                <button className='ecrire'>Commencer à écrire</button>
              </div>
            </div>
          </div>
      </main>
      <section className="section-1">
        <p>Le livre de la semaine</p>
        <div className="king">
          <h1>Le secret du roi</h1>
          <div className='flex'>
            <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.3683 12.5827C32.0618 9.20321 29.7937 6.28066 26.8443 4.17621C23.8949 2.07176 20.3935 0.87767 16.7729 0.741516C13.1522 0.87767 9.65085 2.07176 6.70146 4.17621C3.75208 6.28066 1.48398 9.20321 0.177504 12.5827C0.0892696 12.8267 0.0892696 13.094 0.177504 13.338C1.48398 16.7175 3.75208 19.64 6.70146 21.7445C9.65085 23.8489 13.1522 25.043 16.7729 25.1792C20.3935 25.043 23.8949 23.8489 26.8443 21.7445C29.7937 19.64 32.0618 16.7175 33.3683 13.338C33.4565 13.094 33.4565 12.8267 33.3683 12.5827ZM16.7729 20.1805C15.3449 20.1805 13.9489 19.7571 12.7615 18.9637C11.5742 18.1704 10.6488 17.0427 10.1023 15.7234C9.55579 14.4041 9.41281 12.9523 9.6914 11.5517C9.97 10.1512 10.6577 8.86464 11.6674 7.85487C12.6772 6.84511 13.9637 6.15745 15.3643 5.87886C16.7649 5.60026 18.2166 5.74325 19.5359 6.28973C20.8553 6.83621 21.9829 7.76164 22.7763 8.949C23.5696 10.1364 23.9931 11.5323 23.9931 12.9603C23.9901 14.8744 23.2285 16.7091 21.8751 18.0625C20.5217 19.416 18.6869 20.1776 16.7729 20.1805Z" fill="#C1C5C8"/>
            </svg>
            <span>400k</span>
            <a href='#' className='humore'>Humour</a>
          </div>
          <a href='#' className='show-more'>En savoir plus <i class='bx bxs-right-arrow-alt'></i></a>
        </div>
      </section>
    </>
  )
}

export default App
