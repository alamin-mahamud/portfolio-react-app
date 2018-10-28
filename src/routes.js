import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Index from './containers/Index.jsx'
import About from './containers/About.jsx'
import Projects from './containers/Projects.jsx'
import Portfolio from './containers/Portfolio.jsx'
import Blog from './containers/Blog.jsx'


const Header = () => (
<header>
    <h1>Md. Alamin Mahamud</h1>
    <p>Journey of a self taught software craftsman.</p>
</header>
);

const Footer = () => (
    <footer>
    <p>Copyright &copy; {(new Date()).getFullYear()}</p>
    </footer>
)

export default (
    <Router>
    
    <div>
    <Header />
    <nav>
    <ul>
    
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/about">About</Link>
    </li>
    <li>
    <Link to="/projects">Projects</Link>
    </li>
    <li>
    <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
    <Link to="/blog">Blog</Link>
    </li>
    </ul>
    </nav>
  
    <hr />
    <Route exact path="/" component={Index} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/blog" component={Blog} />

    <hr/>
    <Footer />

  </div>
    </Router>
);
