import './Feature.css'
import f1 from '../../../Project-Image/Feature/f-1.jpg'
import f2 from '../../../Project-Image/Feature/f-2.jpg'
import f3 from '../../../Project-Image/Feature/f-3.jpg'

const Feature = ()=>{
    return(
        <section className="container featured-bike">
            <div className="content">
              <h1>Our Feature</h1>
              <div className="underline"></div>
              <p>We care for you</p>
            </div>

            <section className="container latest-news">
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="news-card shadow">
                  <div className="feature-img">
                    <img src={f1} alt="Feature"/>
                  </div>
                  <div className="news-content act">
                    <h1>Photography</h1>
                    <p className="text-start">For any kinds of events such as wedding, party, birthday party, anniversary etc. We are trying to provide our best for our customers . The event can be remained memorable and unforgettable. "</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="news-card shadow">
                  <div className="feature-img">
                    <img src={f2} alt="Feaature " />
                  </div>
                  <div className="news-content">
                    <h1>Decoration</h1>
                    <p className="text-start">"We are operated business with a reputation throughout the inside of Dhaka city for our distinguished service and execution of special events. We promise to make your special event a memorable and enjoyable experience!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="news-card shadow">
                  <div className="feature-img">
                    <img src={f3} alt="ImFeature"/>
                  </div>
                  <div className="news-content">
                    <h1>Food</h1>
                    <p className="text-start">"It all started with the simple idea that good food makes the world go around. That's why each and every day, we try our best to better serve our community , hygienic, tasty delicious and healthy. That's our promise to you."</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
    )
}

export default Feature
