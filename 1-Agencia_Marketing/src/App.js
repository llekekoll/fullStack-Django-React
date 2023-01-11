import Error404 from 'containers/errors/Error404';
import store from './store';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import Home from 'containers/pages/Home';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Cases from 'containers/pages/Cases';
import Services from 'containers/pages/Services';
import Contact from 'containers/pages/Contact';
import About from 'containers/pages/About';
import Careers from 'containers/pages/Careers';
import Blog from 'containers/pages/Blog';


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Fork DAO | "todo roto"</title>
        <meta name="description" content="Estableciendonos como un agregador web3." />
        <meta name="keywords" content='web3, DAO, integraciones, descentralizacion' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://www.fork-dao.com/" />
        <meta name="author" content='ekeko' />
        <meta name="publisher" content='ekeko' />

        {/* Social Media Tags */}
        <meta property="og:title" content='Fork DAO | "todo roto"' />
        <meta property="og:description" content='Estableciendonos como un agregador web3.' />
        <meta property="og:url" content="www.fork-dao.com/" />
        <meta property="og:image" content='https://bafybeigh4em54oo3stszmrfh756dilog63eszlwhkwpnst3xxzpmwbctxm.ipfs.w3s.link/FDNEGROCIRCULAR.png' />

        <meta name="twitter:title" content='Fork DAO | "todo roto"' />
        <meta
            name="twitter:description"
            content='Estableciendonos como un agregador web3.'
        />
        <meta name="twitter:image" content='https://bafybeigh4em54oo3stszmrfh756dilog63eszlwhkwpnst3xxzpmwbctxm.ipfs.w3s.link/FDNEGROCIRCULAR.png' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Provider store={store}>
        <Router>

          <Routes>
            {/*Error Display*/}
            <Route path='*' element={<Error404 />} />

            {/*Home Display*/}
            <Route path='/' element={<Home />} />
            <Route path='/casos' element={<Cases />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/servicios' element={<Services />} />
            <Route path='/contactos' element={<Contact />} />
            <Route path='/nosotros' element={<About />} />
            <Route path='/carreras' element={<Careers />} />

          </Routes>
        </Router>
      </Provider>
    </HelmetProvider>

  );
}

export default App;