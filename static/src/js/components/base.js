//To import modules
//const SubTab = () => import('./tabs/sub_tab.js');

export default {
  name: "App",
  data: function() {
    return {
      something: false
    }
  },
  template: `<div>
              <!-- As a heading -->
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#">SerialDash</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li :class="{'nav-item':true}">
                        <a class="nav-link">Tab0</a>
                      </li>
                      <li :class="{'nav-item':true}">
                        <a class="nav-link">Tab1</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <p>This is the base</p>
              </div>`
};
