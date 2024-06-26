import React from 'react'

function Header() {
    return (
        <div>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <a href="index.html" className="logo">
                                    <img src="assets/images/MicrosoftTeams-image(6).png" alt=""/>
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Search End ***** */}
                                <div className="search-input">
                                <form id="search" action="#">
                                    <input type="text" placeholder="Type Into Me" id='searchText' name="searchKeyword" onkeypress="handle" />
                                    <i className="fa fa-search"></i>
                                </form>
                                </div>
                                {/* ***** Search End ***** */}
                                {/* ***** Menu Start ***** */}
                               {/*  <ul className="nav">
                                    <li><a href="index.html">Afterlife Adventures</a></li>
                                    <li><a href="browse.html">Gameplay</a></li>
                                    <li><a href="details.html" className="active">Something Something</a></li>
                                    <li><a href="streams.html">Blaaaaaank</a></li>
                                    <li><a href="profile.html">About The Creators <img src="assets/images/profile-header.jpg" alt=""/></a></li>
                                </ul>  */}  
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
    </div>
  </header>

        </div>
    )
}

export default Header 