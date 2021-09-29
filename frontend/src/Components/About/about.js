import a1 from "../../Project-Image/about-1.jpg" 
import a2 from "../../Project-Image/about-2.jpg" 
import './about.css'

const About = () =>{
    return (
      <div className="container _About-us">
             <br />
        <div className="">
            <h1 className="about_h1 mt-2 text-center">ABOUT US</h1>
            <br />
            <br />
            <div className="row">
                <div className="col-12 col-lg-6 me-auto mb-5 mb-lg-0 ">
                  <div className="about_1 text-lg-start">
                    <h2 className="display-11 about_service">THE STORY IN SHORT</h2>
                    <hr className="solid" />
                    <div className="d-flex mb-4">
                      <p className="about_p">Families and corporate houses were looking for one stop solutions to their catering needs, from delicious food to exceptional service by well-trained and well-groomed servers.  We agree with you that the catering industry
                        has been underperforming and falling short of your expectations in terms of quality food and standard service. We also understand that food and service quality can make or break your special event.<br /> <br /> Noticing
                        the gap between expectations and reality, we thought we can do what it takes to end your plight in hosting a successful event that your guests will cherish long after.</p>
                    </div>
                  </div>
                 </div>
                 <div className="col-12 col-lg-6">
                    <img className="img-fluid" src={a1} alt="" />
                </div>
            </div>
            <br />
            <div className="row m-4">
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src={a2} alt="" />
                </div>
                <div className="col-12 col-lg-6 me-auto mb-5 mb-lg-0 ">
                    <div className="about_1 text-lg-start">
                      <h2 className="display-11 about_service">THE JOURNEY BEGINS IN FULL THROTTLE</h2>
                      <hr className="solid" />
                      <div className="d-flex mb-4">
                        <p className="about_p">Families and corporate houses were looking for one stop solutions to their catering needs, from delicious food to exceptional service by well-trained and well-groomed servers.  We agree with you that the catering industry
                          has been underperforming and falling short of your expectations in terms of quality food and standard service. We also understand that food and service quality can make or break your special event.<br /> <br /> Noticing
                          the gap between expectations and reality, we thought we can do what it takes to end your plight in hosting a successful event that your guests will cherish long after.</p>
                        </div>
                    </div>
                </div>
            </div>
          
          
          <div className="col-12 col-lg-12 me-auto mb-5 mb-lg-0 ">
            <div className="about_1 text-lg-center">
              <div className="hr">
                <h2 className="display-11 about_service">OUR APPROACH</h2>
                <div className="h-divider">
                  <div className="shadow" />
                  <div className="text2"><img src="" /></div>
                </div>
              </div>
              <div className="d-flex mb-4 ">
                <p className="about_p ">To us, every event is special and we are determined to providing you with the best food experience that will make your occasions more memorable.<br /> <br />Thanks to delivering fabulous foods and excellent service, we proudly
                  claim that we are the leading event caterer for all your social and corporate events.Yes, you got us right. We are here to disrupt the catering service industry and set the gold standard of food preparation and
                  service delivery. We know you are always with the best performer.</p>
              </div>
            </div> 
          </div>

          <br/>  
                <div className="banner-section-ss">
                  <div className="banner-content text-center" style={{color:"#000204"}}>
                      <br></br>
                      <br></br>
                      <h1 class="display-4 fw-bold mt-2 mb-3 " style={{color:"white !important" ,padding:"1rem"}}>NEED ONE STOP SOLUTIONS TO SPICE UP YOUR EVENTS?</h1>
                      <p class="lead mb-4 display-6 " style={{color:"white" }}>WE ARE THE FULL-SERVICE CATERING EXPERIENCE PROVIDER</p>
                  </div>
                </div>
            <br/>
        </div>
      </div>
    )
}


export default About