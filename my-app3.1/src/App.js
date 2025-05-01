import React from 'react';
import List from './components/list';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',                  
        backgroundColor: '#F9FAFB'           
      }}
    >
      <header
        style={{
          backgroundColor: '#2563EB',         
          color: '#FFFFFF',                  
          padding: '1rem',                   
          textAlign: 'center',                
          fontSize: '1.25rem',              
          fontWeight: 700                    
        }}
      >
        Мое React-приложение
      </header>
      <main
        style={{
          padding: '1.5rem',
                           
        }}
      >
        <List />
      </main>
    </div>
  );
}

export default App;