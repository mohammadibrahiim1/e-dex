import React from 'react';

const Nav = () => {
    return (
        <div>
             <section className="header-section">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <a class="navbar-brand" href="/">
                {/* <a href="https://ibb.co/z49q52v"><img src="https://i.ibb.co/tJjVh2r/eDex.png" alt="eDex" border="0"></a> */}
              <img src="https://i.ibb.co/tJjVh2r/eDex.png" alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul
                class="navbar-nav m-auto my-2  my-lg-0 navbar-nav-scroll"
                style={{ "--bs-scroll-height": "100px" }}
              >
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    About
                  </a>
                </li>
                {/* <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Link
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link " href="/">
                    Courses
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/">
                    Contact
                  </a>
                </li>
              </ul>
              {/* <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                
              </form> */}
              <button class="btn btn-outline-success" type="submit">
                 sign up 
                </button>
            </div>
          </div>
        </nav>
      </section>
        </div>
    );
};

export default Nav;