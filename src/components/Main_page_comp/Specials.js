import greeksalad from '../images/greek-salad.jpg'
import bruschetta from '../images/Bruschetta.svg'
import dessert from '../images/dessert.jpg'

function Specials() {
    return (
        <section className="menu">
          <div className="menu-desc">
            <h2>This weeks specials!</h2>
            <button className="btn">
              Online Menu
            </button>
          </div>
          <section className="cards">
            <div className="card">
              <img className="menu-img" src={greeksalad} alt="greek salad"/>
              <div className="name-price">
                <h5>Greek Salad</h5>
                <p className="item-price">$12.99</p>
              </div>
              <div className="item-desc">
                <p>The famous greek salad of crispy lettuce,
                  peppers, olives and our Chicago style feta cheese,
                  garnished with crunchy garlic and rosemary croutons.
                </p>
              </div>
              <div className="delivery">
                <button className="order">Order Now</button>
              </div>
            </div>
            <div className="card">
              <img className="menu-img" src={bruschetta} alt="bruchetta"/>
              <div className="name-price">
                <h5>Bruchetta</h5>
                <p className="item-price">$5.99</p>
              </div>
              <div className="item-desc">
                <p>Our Bruschetta is made from grilled bread that has
                  been smeared with garlic and seasoned with salt and olive oil.
                </p>
              </div>
              <div className="delivery">
                <button className="order">Order Now</button>
              </div>
            </div>
            <div className="card">
              <img className="menu-img" src={dessert} alt="lemon-dessert"/>
              <div className="name-price">
                <h5>Lemon Dessert</h5>
                <p className="item-price">$5.00</p>
              </div>
              <div className="item-desc">
                <p>This comes straight from grandma's recipe book,
                  every last ingredient has been sourced and is as 
                  authentic as can be imagined.
                </p>
              </div>
              <div className="delivery">
                <button className="order">Order Now</button>
              </div>
            </div>
          </section>
        </section>
    );
  }

export default Specials;