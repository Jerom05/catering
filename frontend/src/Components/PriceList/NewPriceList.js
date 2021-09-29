import './Price.css'
import { Link } from 'react-router-dom'
const NewPriceList = () => {
    return(
        <div>
            <section class="pyy-footer bgg-footer Price">
                <div className="food-photo">
                <br/>
                <h1 className=" mt-3 mb-5 text-center">Food Price List</h1>
                <div className="d-flex justify-content-center">
                <Link to="/menu" className="btn btn-p btn-primary me-3 mt-4 flex-flow w-25" role="button">Our Menu</Link>
                <Link to="/quotation" className="btn btn-p btn-primary mt-4 flex-flow w-25" role="button">Menu Request</Link>
                </div>

                 </div>
                 <br />
                 <br />
                <div class="container ">
                    <div class="row">
                        <h1 class="h1_heading text-center mb-4">Rice & Biryani</h1>
                        <div class="h-divider">
                            <div class="shadow"></div>
                        </div>

                        <div class="col-12 col-lg-6 mb-5 ">
                            <ul class="list-group">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>White Rice (Kataribhog)</b>
                                    <span class="badge bg-primary rounded-pill">৳ 45</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>White Rice (Basmati)                            </b>
                                    <span class="badge bg-primary rounded-pill">৳ 60</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>(Plain) Bhuna Khichuri                    </b>
                                    <span class="badge bg-primary rounded-pill">৳ 65</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>White Rice (Basmati)                            </b>
                                    <span class="badge bg-primary rounded-pill">৳ 60</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Plain Polao (Chinigura)                            </b>
                                    <span class="badge bg-primary rounded-pill">৳ 65</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Shahi Polao (Chinigura)                        </b>
                                    <span class="badge bg-primary rounded-pill">৳ 80</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>MotorShuti (Pea) Polao (Chingura)                           </b>
                                    <span class="badge bg-primary rounded-pill">৳ 90</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Morog Polao (Double)                          </b>
                                    <span class="badge bg-primary rounded-pill">৳ 190</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Morog Polao (Regular)                          </b>
                                    <span class="badge bg-primary rounded-pill">৳ 290</span>
                                </li>
                            </ul>
                        </div>

                        <div class="col-12 col-lg-6 mb-5 ">
                            <ul class="list-group">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Aachari Khichuri                        </b>
                                    <span class="badge bg-primary rounded-pill">৳ 70</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Aachari Khichuri
                                    </b>
                                    <span class="badge bg-primary rounded-pill">৳ 90</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Beef Tehari (Special)                   </b>
                                    <span class="badge bg-primary rounded-pill">৳ 95</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Beef Tehari (Regular)
                                    </b>
                                    <span class="badge bg-primary rounded-pill">৳ 80</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Beef Tehari (Single)                          </b>
                                    <span class="badge bg-primary rounded-pill">৳ 90</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Mutton Tehari (Special)                      </b>
                                    <span class="badge bg-primary rounded-pill">৳ 300</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Mutton Tehari (Single)                         </b>
                                    <span class="badge bg-primary rounded-pill">৳ 190</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Beef Bhuna Khichuri (Special)                          </b>
                                    <span class="badge bg-primary rounded-pill">৳ 225</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <b>Beef Bhuna Khichuri (Regular)                         </b>
                                    <span class="badge bg-primary rounded-pill">৳ 260</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <hr />

            <br />
            <br />
            <section class="pyy-footer bgg-footer Price">
        <div class="container ">
            <div class="row">
                <h1 class="h1_heading text-center mb-5" >Breakfast & Snack</h1>
                <div class="h-divider">
                            <div class="shadow"></div>
                        </div>
                <div class="col-12 col-lg-6 mb-5 ">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Plain Naan                        </b>
                            <span class="badge bg-primary rounded-pill">৳ 45</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Butter Naan                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 60</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Plain Paratha                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 65</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Special Paratha                        </b>
                            <span class="badge bg-primary rounded-pill">৳ 60</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Chapati Rooti                         </b>
                            <span class="badge bg-primary rounded-pill">৳ 65</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Luchi                     </b>
                            <span class="badge bg-primary rounded-pill">৳ 80</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Egg Omelette                      </b>
                            <span class="badge bg-primary rounded-pill">৳ 90</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Aloor Dom                     </b>
                            <span class="badge bg-primary rounded-pill">৳ 190</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Booter Daal w/ chicken liver                      </b>
                            <span class="badge bg-primary rounded-pill">৳ 290</span>
                        </li>
                    </ul>
                </div>


                <div class="col-12 col-lg-6 mb-5 ">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Chicken Sandwich
                        </b>
                            <span class="badge bg-primary rounded-pill">৳ 60</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Mini Chicken Sandwich

                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 90</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Egg Sandwich                 </b>
                            <span class="badge bg-primary rounded-pill">৳ 75</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Egg Paratha Roll

                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 80</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Vegetable Paratha Roll
                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 90</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Mini Pizza
                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 50</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Chicken Patties
                            </b>
                            <span class="badge bg-primary rounded-pill">৳70</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Vegetable Spring Roll
                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 30</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>PatiSapta Pitha
                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 25</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        
    </section>

        <hr />
    <section class="pyy-footer bgg-footer Price">
        <div class="container ">
            <br />
            <br />
            <div class="row">
                <h1 class="h1_heading text-center mb-5" >Curry</h1>
                <div class="h-divider">
                    <div class="shadow"></div>
                </div>
                <div class="col-12 col-lg-6 mb-5 ">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Chicken Roast (Cock / Sonali)                       </b>
                            <span class="badge bg-primary rounded-pill">৳ 45</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Chicken Roast (Deshi)                           </b>
                            <span class="badge bg-primary rounded-pill">৳ 60</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Chicken Roast (Broiler)                  </b>
                            <span class="badge bg-primary rounded-pill">৳ 65</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Whole Chicken Roast                           </b>
                            <span class="badge bg-primary rounded-pill">৳ 60</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Tandoori Chicken (Broiler)                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 65</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Chicken Korma / Bhuna /                      </b>
                            <span class="badge bg-primary rounded-pill">৳ 80</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Chicken Jhal Fry (Pakistani Cock / Sonali)                        </b>
                            <span class="badge bg-primary rounded-pill">৳ 90</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Duck Meat Bhuna                        </b>
                            <span class="badge bg-primary rounded-pill">৳ 190</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Beef Rezala / (Kala) Bhuna / Curry (Bone-in)                       </b>
                            <span class="badge bg-primary rounded-pill">৳ 290</span>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-6 mb-5 ">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>(Galda) Chingri Malai Curry / Dopiaza                      </b>
                            <span class="badge bg-primary rounded-pill">৳ 270</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Mixed Vegetables (Deshi Style)
                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 390</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Kola Bhorta
                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 195</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Taki Bhorta
                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 280</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Chingri Bhorta                     </b>
                            <span class="badge bg-primary rounded-pill">৳ 190</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Ilish Fry / Ilish DoPiaza / Sorshe Ilish                    </b>
                            <span class="badge bg-primary rounded-pill">৳ 200</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Chapa Shutki Bhorta                      </b>
                            <span class="badge bg-primary rounded-pill">৳ 100</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Begun Bhorta                        </b>
                            <span class="badge bg-primary rounded-pill">৳ 227</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>RupChanda Fry / DoPiaza                       </b>
                            <span class="badge bg-primary rounded-pill">৳ 260</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </section>

    <section class="pyy-footer bgg-footer Price">
        <div class="container ">
            <br />
            <br />
            <div class="row">
                <h1 class="h1_heading text-center mb-5" >Mezbani Khabar</h1>
                <div class="h-divider">
                    <div class="shadow"></div>
                </div>
                <div class="col-12 col-lg-6 mb-5 ">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Mazbani Gosht                     </b>
                            <span class="badge bg-primary rounded-pill">৳ 170</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Chicken Roast (Deshi)                           </b>
                            <span class="badge bg-primary rounded-pill">৳ 60</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Kala vuna                 </b>
                            <span class="badge bg-primary rounded-pill">৳ 200</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Dal Gosht                           </b>
                            <span class="badge bg-primary rounded-pill">৳ 80</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Tandoori Chicken (Broiler)                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 65</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Paya                    </b>
                            <span class="badge bg-primary rounded-pill">৳ 120</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Akhni Biriyani                       </b>
                            <span class="badge bg-primary rounded-pill">৳ 150</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
    <section class="pyy-footer bgg-footer Price">
        <div class="container ">
            <br />
            <br />
            <div class="row">
                <h1 class="h1_heading text-center mb-5" >Drinks & Water & Desserts</h1>
                <div class="h-divider">
                    <div class="shadow"></div>
                </div>
                <div class="col-12 col-lg-6 mb-5 ">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Mineral Water-500ml                     </b>
                            <span class="badge bg-primary rounded-pill">৳ 20</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Mineral Water-1L                            </b>
                            <span class="badge bg-primary rounded-pill">৳ 35</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Fanta-200ml                 </b>
                            <span class="badge bg-primary rounded-pill">৳ 25</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>7up-200ml                         </b>
                            <span class="badge bg-primary rounded-pill">৳ 25</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>sprite-200ml                           </b>
                            <span class="badge bg-primary rounded-pill">৳ 25</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>cocacola-200ml                   </b>
                            <span class="badge bg-primary rounded-pill">৳ 20</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Mixed Fruit juice                     </b>
                            <span class="badge bg-primary rounded-pill">৳ 70</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Borhani-500ml                    </b>
                            <span class="badge bg-primary rounded-pill">৳ 60</span>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-6 mb-5 ">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Firni                   </b>
                            <span class="badge bg-primary rounded-pill">৳ 30</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Cake                           </b>
                            <span class="badge bg-primary rounded-pill">৳ 60</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Faluda                </b>
                            <span class="badge bg-primary rounded-pill">৳ 120</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Lassi                        </b>
                            <span class="badge bg-primary rounded-pill">৳ 80</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Sweet                   </b>
                            <span class="badge bg-primary rounded-pill">৳ 75</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Curd                    </b>
                            <span class="badge bg-primary rounded-pill">৳ 45</span>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        </section>
{/* 
    <section class="pyy-footer bgg-footer Price">
        <div class="container ">
            <br />
            <br />
            <div class="row">
                <h1 class="h1_heading text-center mb-5" >Dessert</h1>
                <div class="h-divider">
                    <div class="shadow"></div>
                </div>
                <div class="col-12 col-lg-6 mb-5 ">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Firni                   </b>
                            <span class="badge bg-primary rounded-pill">৳ 30</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Cake                           </b>
                            <span class="badge bg-primary rounded-pill">৳ 60</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Faluda                </b>
                            <span class="badge bg-primary rounded-pill">৳ 120</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Lassi                        </b>
                            <span class="badge bg-primary rounded-pill">৳ 80</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Sweet                   </b>
                            <span class="badge bg-primary rounded-pill">৳ 75</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <b>Curd                    </b>
                            <span class="badge bg-primary rounded-pill">৳ 45</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </section> */}

        </div>
    )
}

export default NewPriceList