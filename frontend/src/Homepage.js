import { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <nav>
        <Link to='/' style={{ textDecoration: 'none' }}><h2>ObeSense</h2></Link>
      </nav>
      <main className='Main'>
        <div id='home-logo'></div>
        <p>Introducing ObeSense: our web application harnesses machine learning to classify obesity levels based on user data.</p>
        <p>Experience the precision of our RandomForestClassifier model as it empowers you with personalized insights for a healthier lifestyle.</p>
        <p>Discover ObeSense for accurate predictions and tailored recommendations to support your well-being journey.</p>
        <a href='/classify'>
          <button className='btn'>Begin</button>
        </a>
      </main>
    </div>
  );
}
}

export default Home;