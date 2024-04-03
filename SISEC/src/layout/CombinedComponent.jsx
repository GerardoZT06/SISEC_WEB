// eslint-disable-next-line no-unused-vars
import React from 'react';
import './stylesdashboard.css';

function CombinedComponent() {
    return (
        <div className="container">
         
            <nav>
                <div className="navbar">
                    <div className="logo">
                        <img src="/pic/logo.jpg" alt="" />
                        <h1>jobs</h1>
                    </div>
                    <ul>
                        <li><a href="#">
                            <i className="fas fa-user"></i>
                            <span className="nav-item">Dashboard</span>
                        </a>
                        </li>
                        <li><a href="#">
                            <i className="fas fa-chart-bar"></i>
                            <span className="nav-item">Analytics</span>
                        </a>
                        </li>
                        <li><a href="#">
                            <i className="fas fa-tasks"></i>
                            <span className="nav-item">Jobs Board</span>
                        </a>
                        </li>
                        <li><a href="#">
                            <i className="fab fa-dochub"></i>
                            <span className="nav-item">Documnents</span>
                        </a>
                        </li>
                        <li><a href="#">
                            <i className="fas fa-cog"></i>
                            <span className="nav-item">Setting</span>
                        </a>
                        </li>
                        <li><a href="#">
                            <i className="fas fa-question-circle"></i>
                            <span className="nav-item">Help</span>
                        </a>
                        </li>
                        <li><a href="#" className="logout">
                            <i className="fas fa-sign-out-alt"></i>
                            <span className="nav-item">Logout</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="main">
                <div className="main-top">
                    <p>Explore the universe!</p>
                </div>
                <div className="main-body">
                    <h1>Recent Jobs</h1>
                    <div className="search_bar">
                        <input type="search" placeholder="Search job here..." />
                        <select name="" id="">
                            <option>Category</option>
                            <option>Web Design</option>
                            <option>App Design</option>
                            <option>App Development</option>
                        </select>
                        <select className="filter">
                            <option>Filter</option>
                        </select>
                    </div>
                    <div className="tags_bar">
                        <div className="tag">
                            <i className="fas fa-times"></i>
                            <span>Programming</span>
                        </div>
                        <div className="tag">
                            <i className="fas fa-times"></i>
                            <span>Design</span>
                        </div>
                        <div className="tag">
                            <i className="fas fa-times"></i>
                            <span>PHP</span>
                        </div>
                        <div className="tag">
                            <i className="fas fa-times"></i>
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div className="row">
                        <p>There are more than <span>400</span> Jobs</p>
                        <a href="#">See all</a>
                    </div>
                    <div className="job_card">
                        <div className="job_details">
                            <div className="img">
                                <i className="fab fa-google-drive"></i>
                            </div>
                            <div className="text">
                                <h2>UX Designer</h2>
                                <span>Google Drive - Junior Post</span>
                            </div>
                        </div>
                        <div className="job_salary">
                            <h4>$6.7 - $12.5k /yr</h4>
                            <span>1 days ago</span>
                        </div>
                    </div>

                    <div className="job_card">
                        <div className="job_details">
                            <div className="img">
                                <i className="fab fa-google"></i>
                            </div>
                            <div className="text">
                                <h2>JavaScript Developer</h2>
                                <span>Google - Senior Post</span>
                            </div>
                        </div>
                        <div className="job_salary">
                            <h4>$8.7 - $13.2k /yr</h4>
                            <span>2 days ago</span>
                        </div>
                    </div>
                    <div className="job_card">
                        <div className="job_details">
                            <div className="img">
                                <i className="fab fa-facebook"></i>
                            </div>
                            <div className="text">
                                <h2>Product Developer</h2>
                                <span>Facbook - Manager Post</span>
                            </div>
                        </div>
                        <div className="job_salary">
                            <h4>$11 - $18.5k /yr</h4>
                            <span>2 days ago</span>
                        </div>
                    </div>
                    <div className="job_card">
                        <div className="job_details">
                            <div className="img">
                                <i className="fab fa-git-alt"></i>
                            </div>
                            <div className="text">
                                <h2>Programmer</h2>
                                <span>Github - Juni Post</span>
                            </div>
                        </div>
                        <div className="job_salary">
                            <h4>$6 - $11.5k /yr</h4>
                            <span>3 days ago</span>
                        </div>
                    </div>
                    <div className="job_card">
                        <div className="job_details">
                            <div className="img">
                                <i className="fab fa-youtube"></i>
                            </div>
                            <div className="text">
                                <h2>React.js Expert</h2>
                                <span>Youtube - VIP</span>
                            </div>
                        </div>
                        <div className="job_salary">
                            <h4>$12.5 - $25.5k /yr</h4>
                            <span>4 days ago</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CombinedComponent;
