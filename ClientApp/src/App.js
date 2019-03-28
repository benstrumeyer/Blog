import React from 'react'
import Nav from './Nav'
import Main from './components/Main'
import './sass/main.scss';

export default function App({ emails }) {
    return (
         <div className="mail-client">
             <aside>
                 <Nav/>
             </aside>

             <main>
                 <Main emails={emails} />
             </main>
         </div>
    )
}