const Home = { template: 
  `
  <div class="row">
    <div class="large-12 columns">
        <div class="ribbon">
            <div class="ribbon-content">
              <ul>
                <li>
                    <h1>Kruiis Tallinn-Stockholm-Tallinn</h1>
                </li>
                <li>
                    <a href="#/" class="info">i</a> 
                </li>
                <li><span class="price">252</span>€</li>
                </ul>
            </div>
        </div>
        <div class="more-info callout">                                                 
            <h3>BRONEERINGU KOKKUVÕTE</h3>
            <strong>Esmaspäev 7.10.2013 kl 18:00 M/S Victoria I</strong>
            <hr />
            <p>2 Täiskasvanut, 1 Laps</p>
            <p>1 x A-klassi kajut</p>
            <p>1 x A-klassi kajut kaheinimesevoodiga</p>
            <div class="row">
                <div class="large-12 columns">
                    <label>Sooduskood
                        <input type="text" placeholder="" />
                    </label>
                    <router-link to="/redirect-boooking" class="button expanded">Broneeri reis</router-link>                    
                </div>
            </div>
        </div>                
    </div>
  </div>  
  `
 }
const Payment = { template: 
`
<div class="row">
    <div class="large-12 columns">
        <div class="ribbon">
            <div class="ribbon-content">
                <ul>
                <li>
                    <h1>Kruiis Tallinn-Stockholm-Tallinn</h1>
                </li>
                <li>
                    <a href="#/" class="info">i</a> 
                </li>
                <li><span class="price">252</span>€</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="large-12 columns">
    <ul class="tabs" role="tablist">
        <li>
            <input type="radio" name="tabs" id="tab1" checked />
            <label for="tab1" role="tab" aria-selected="true" aria-controls="panel1" tabindex="0">Online pangad</label>
            <div id="tab-content1" class="tab-content" role="tabpanel" aria-hidden="false">
                <form id="bank-links" action="#/booked" data-abide novalidate>
                <div class="row">                                
                    <fieldset>                                
                    <div class="large-12 columns">
                        <div data-abide-error class="alert callout" style="display: none;">
                        <p><i class="fi-alert"></i>Vali pank!</p>
                        </div>
                        <div class="row">
                        <div class="small-8 medium-6 columns">
                            <label for="swedpank"><input type="radio" name="bank" value="swedpank" id="swedpank" required>Swedpank</label>
                        </div>
                        <div class="small-4 medium-6 columns">
                            <span class="sprite sprite-swedpank"></span>
                        </div>                       
                        </div>                                  
                    </div>
                    <div class="large-12 columns">
                        <div class="row">
                        <div class="small-8 medium-6 columns">
                            <label for="seb"><input type="radio" name="bank" value="seb" id="seb">SEB</label>
                        </div>
                        <div class="small-4 medium-6 columns">
                            <span class="sprite sprite-seb"></span>
                        </div>
                        </div>
                    </div>
                    <div class="large-12 columns">
                        <div class="row">
                        <div class="small-8 medium-6 columns">
                            <label for="nordea"><input type="radio" name="bank" value="nordea" id="nordea">Nordea</label>
                        </div>
                        <div class="small-4 medium-6 columns">
                            <span class="sprite sprite-nordea"></span>
                        </div>
                        </div>
                    </div>
                    <div class="large-12 columns">
                        <div class="row">
                        <div class="small-8 medium-6 columns">
                            <label for="danskebank"><input type="radio" name="bank" value="danskebank" id="danskebank">Danske Bank</label>
                        </div>
                        <div class="small-4 medium-6 columns">
                            <span class="sprite sprite-danskebank"></span>
                        </div>                                
                        </div>
                    </div>                                                                                                
                    </fieldset>
                    <fieldset class="large-12 columns">
                    <button class="button expanded" id="test" value="submit">Maksa</button>
                    </fieldset>
                </div>
                </form>
            </div>
        </li>                  
        <li>
            <input type="radio" name="tabs" id="tab2" />
            <label for="tab2" role="tab" aria-selected="false" aria-controls="panel2" tabindex="0">Krediitkaart</label>
            <div id="tab-content2" class="tab-content" role="tabpanel" aria-hidden="true">
                <form id="credit-card" action="#/booked" data-abide novalidate>
                <div class="row">                              
                    <fieldset>                                
                    <div class="large-12 columns">
                        <div data-abide-error class="alert callout" style="display: none;">
                        <p><i class="fi-alert"></i>Palun täida nõutud väljad!</p>
                        </div>
                        <div class="row">
                        <div class="small-8 medium-6 columns">
                            <label for="visa"><input type="radio" name="credit" value="visa" id="visa" required>Visa</label>
                        </div>
                        <div class="small-4 medium-6 columns">
                            <span class="sprite sprite-visa"></span>
                        </div>                       
                        </div>                                  
                    </div>
                    <div class="large-12 columns">
                        <div class="row">
                        <div class="small-8 medium-6 columns">
                            <label for="mastercard"><input type="radio" name="credit" value="mastercard" id="mastercard">Mastercard</label>
                        </div>
                        <div class="small-4 medium-6 columns">
                            <span class="sprite sprite-mastercard"></span>
                        </div>
                        </div>
                    </div>
                    <div class="large-12 columns">
                        <input type="text" placeholder="Nimi" required>
                    </div>
                    <div class="large-12 columns">
                        <input type="card" placeholder="Kaartinumber" required>
                    </div>
                    <div class="large-12 columns">
                        <div class="row">
                        <div class="large-6 columns">
                            <label class="label-small">Kaardi kehtivusaeg
                            <div class="row">
                                <div class="small-6 columns">
                                <input type="number" min="1" max="12" placeholder="kk" required>
                                </div>                 
                                <span class="split">/</span>
                                <div class="small-6 columns">
                                <input type="number" min="17" max="20" placeholder="aa" required>
                                </div>                                                                                
                            </div>
                            </label>
                        </div>
                        <div class="large-6 columns">
                            <label class="label-small">Kaardi turvanumber                                                                                
                            <input type="cvv" placeholder="CVV" class="small-4" required>
                            <div class="small-6 columns"></div>
                            </label>
                        </div>
                        </div>
                    </div>
                    </fieldset>
                    <fieldset class="large-12 columns">
                    <button class="button expanded" id="test" type="submit" value="submit">Maksa</button>
                    </fieldset>
                </div>
                </form>
            </div>
        </li>
    </ul>                
    </div>              
</div>
`,
    mounted () {
        $(document).foundation()      
    }
}

const Booked = { template: 
`
 <div class="row">
    <div class="large-12 columns">
        <div class="ribbon">
            <div class="ribbon-content">
            <h1>Täname!</h1>
            </div>
        </div>
        <div class="booked-info">
        <h3>Broneeringu kinnitus</h3>
        <h4>Broneeringu eest on tasutud. <br />
            Soovime teile meeldivat merereisi!</h4>              
        <div class="more-info callout">
            <div class="row">
            <div class="small-8 columns">
                <p>{{ message }}</p>
                <p>25.6.2012 kl 10:12</p>
            </div>
            <div class="small-4 columns">
                <p class="text-dark-blue"><span class="price">252</span>€</p>
            </div>
            </div>                  
            <hr />
            <div class="row">
                <strong>Broneeringu number: <span class="text-dark-blue"> 12345678</span></strong>
                <strong>Turvanumber Self-Checkini: <span class="text-dark-blue"> 1234</span></strong>
            </div>                    
        </div>              
        <form id="check-in" action="#/" data-abide novalidate>
            <div class="row">
                <div class="large-12 columns">
                    <label>Saada/jaga kinnitust (PDF) emailiga 
                    <input type="email" placeholder="Email" required>
                    </label>
                </div>
                <div class="large-12 columns">
                    <button class="button expanded" id="test" type="submit" value="submit"> Check In</button>
                </div>
            </div>                
        </form>
        </div>          
    </div>
</div>
`,
  data () {
    if((window.location.href.indexOf("?bank") > -1)){
        return {
            message: "Makstud internetipangast"
        }   
    }
    else {
        return {
            message: "Makstud krediitkaardiga"
        }   
    }        
  }
}

const routes = [
  { path: '/', component: Home },
  { path: '/payment', component: Payment },
  { path: '/booked', component: Booked },
  { path: '/redirect-boooking', redirect: '/payment' },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({    
  routes
})

const app = new Vue({
  router,
}).$mount('.content')
