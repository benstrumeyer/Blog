import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main'
import './sass/main.scss';

export default function App({ emails }) {
    return (
         <div className="mail-client">
             <aside>
                 <Navigation/>
             </aside>

             <main>
                 <Main emails={emails} />
             </main>
         </div>
    )
}