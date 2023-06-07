import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import {Navbar} from 'react'
import axios from 'axios';

function Navbar() {
  const [search, setSearch] = useState('');
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchItems, setSearchItems] = useState([]);

  let user=JSON.parse(localStorage.getItem('users'))
  console.log(user)
  let navigate = useNavigate()
  function logout( )
  {
    localStorage.clear();
    navigate('/Register') 
  }
  const searchForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (search !== '') {
      axios
        .get(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => {
          setSearchProduct(res.data.products);
          localStorage.setItem('products', JSON.stringify(res.data.products));
          let storedProducts =
            localStorage.getItem('products') !== null
              ? JSON.parse(localStorage.getItem('products'))
              : [];
          setSearchItems(storedProducts);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [search]);

  return (
    <div>
      <div>
        <img
          src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w22-super-deals/Xiaomi-BD/Xiaomi-top-strip.gif"
          className="img-fluid w-100"
          alt=""
        />
      </div>
      <div className="bg-secondary">
        <div className="container d-flex " style={{ alignItems: 'center' }}>
          <div>
            <i className="text-warning">
              Sell On{' '}
              <span>
                <img
                  src="https://group-live.jumia.is/images/press/articles/jumia-listed-on-the-new-york-stock-exchange.png"
                  alt=""
                  style={{ width: '30%' }}
                />
              </span>
            </i>
          </div>

          <div>
            <img
              src="https://pay.jumia.com.ng/images/logo-white.svg"
              style={{ width: '25%' }}
              alt=""
            />
            <img
              src="https://africa-public.food.jumia.com/assets/production/ng/layout/themes/capricciosa_hellofood/images/en/jumiafood-logo.png?v=1683703800"
              style={{ width: '25%' }}
              alt=""
            />
            <img
              src="https://static.jumia.com.ng/cms/jumialogonew.png"
              style={{ width: '20%' }}
              alt=""
            />
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-xlg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://group-live.jumia.is/images/press/articles/jumia-listed-on-the-new-york-stock-exchange.png"
              className="w-25 img-fluid"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             {
              localStorage.getItem('users')?
              <>
               <li className="nav-item">
                <p className="nav-link active" aria-current="page">
                  <Link to="/Index" className="one">
                    Home
                  </Link>
                </p>
              </li>
              </>:
              <>
                <li className="nav-item">
                <p className="nav-link active" aria-current="page">
                  <Link to="/Login" className="one">
                    Login
                  </Link>
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">
                  <Link to="/Register" className="one">
                    Register
                  </Link>
                </p>
              </li>
              </>
             }
              {/* <ul>
              <li style={{color:'black'}}>
              </li>
              <li>
                LogOut
              </li>
            </ul> */}
</ul>
{localStorage.getItem('users')?
           
            <form className="d-flex" onSubmit={searchForm}>
              <input
                className="form-control me-2 w-100"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchproduct"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-outline-warning"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasLeft"
                aria-controls="offcanvasLeft"
              >
                Search
              </button>
              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasLeft"
                aria-labelledby="offcanvasLeftLabel"
              >
                <div className="offcanvas-header bg-secondary text-light">
                  <h5 id="offcanvasLeftLabel" >Search Results</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body" style={{border:'1px solid grey',backgroundImage:'url(https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_1280.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                  {searchItems.length === 0 ? (
                    <h3 className='text-light'>No search results found.</h3>
                  ) : (
                    <ul className="list-unstyled" >
                      {searchItems.map((item) => (
                        <li key={item.id} className="d-flex mb-3" style={{border:'2px solid none',backgroundColor:'rgb(0,0,0,0.4)',color:'white',borderRadius:'10px',boxShadow:'5px 5px 4px white'}}>
                          <img
                            src={item.images[1]}
                            alt={item.title}
                            className="img-fluid me-3"
                            style={{ maxWidth: '200px' }}
                          />
                          <div className='pt-4'>
                            <h6>{item.title}</h6>
                            <p>Price: ${item.price}</p>
                            <p>Discount Percentage:  ${item.discountPercentage}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                  )}
                  
                </div>
              </div>
            </form>
:null}


            {localStorage.getItem('users')?

            <div class="dropdown">
              <h5>User:</h5>
  <p class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  {  user && user[0].Firstname + " "+ user[0].Lastname } 
  </p>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" onClick={logout} href="#">LogOut</a></li>
  </ul>
</div>:null}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;