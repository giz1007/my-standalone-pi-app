import React, { useState } from 'react';

export default function App() {
  const piUrls = {
    'Alkalyzer': 'http://192.168.10.52:8000',
    'Reefalyzer': 'http://192.168.10.37:8000',
    'strawberry-pi': 'http://192.168.10.97:8000',
  };

  const [activeUrl, setActiveUrl] = useState(piUrls['Alkalyzer']);

  return (
    <div style={styles.container}>
      <div style={styles.viewport}>
        <iframe 
          src={activeUrl} 
          style={styles.iframe} 
          title="Pi View"
          sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts"
        />
      </div>

      <div style={styles.tabBar}>
        {Object.keys(piUrls).map((piName) => (
          <button 
            key={piName} 
            style={{
              ...styles.tabButton, 
              backgroundColor: activeUrl === piUrls[piName] ? '#f0f4f8' : '#ffffff',
              color: activeUrl === piUrls[piName] ? '#007AFF' : '#666'
            }}
            onClick={() => setActiveUrl(piUrls[piName])}
          >
            {piName}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', margin: 0, padding: 0, fontFamily: 'sans-serif', overflow: 'hidden', backgroundColor: '#fff' },
  viewport: { flex: 1, width: '100%' },
  iframe: { width: '100%', height: '100%', border: 'none' },
  tabBar: { display: 'flex', height: '75px', borderTop: '1px solid #e0e0e0', backgroundColor: '#ffffff', paddingBottom: '20px' },
  tabButton: { flex: 1, border: 'none', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }
};
