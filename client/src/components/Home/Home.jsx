import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => (
  <>

  
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Streamline Your Productivity with Ease
</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
        Task manager is a powerful task management app designed to help 
        you stay organized and focused on what matters most. Effortlessly 
        create, organize, and prioritize your tasks, and watch your productivity soar. 
        With intuitive features and a clean, user-friendly interface, Task manager is your ultimate
         companion in tackling your to-do list. Say goodbye to overwhelm and hello to productivity. Get started today and take control
          of your tasks like never before.

        </p>
        <Link to="/dashboard" className="shop-now-button">
          Get Started
        </Link>
      </div>
      <img
        src="https://img.freepik.com/premium-vector/deadline-time-management-road-success-metaphor-time-management_194360-390.jpg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
