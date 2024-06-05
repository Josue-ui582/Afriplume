import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <nav className='nav'>
          <div>
            <img className='logo' src="./public/image.png" alt="Logo Afriplume" />
          </div>
          <div className='list'>
            <ul>
              <li>
                Accueil
              </li>
              <li>
                Genre Littéraire
              </li>
              <li>
                Ecrire
              </li>
              <li>
                Espace Auteur
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="./public/" alt="" />
              </li>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default App
