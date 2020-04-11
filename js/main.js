class Jugador { }

class Partida {
  constructor(sudoku) {
    this.sudoku = sudoku;
  }

  guardarSudoku() {
    const indexedDB = window.indexedDB;
    var request = indexedDB.open("sudoku", 1);
    var sud = this.sudoku;
    request.onerror = function (event) {
      console.log("Error: ", event.target.errorCode);
    }
    request.onupgradeneeded = function () {
      db = request.result;
      const objectStore = db.createObjectStore('sudoku', { autoIncrement: true, keyPath: 'tipo' });
      objectStore.createIndex('nums', 'nums.num', { unique: false, multiEntry: true });
      objectStore.transaction.oncomplete = function () {
        var transaction = db.transaction(['sudoku'], 'readwrite').objectStore('sudoku');
        transaction.add(sud);
      }
    };
    request.onsuccess = function (event) {
      db = request.result;
    }
  }

  mostrarSudoku() {
    const indexedDB = window.indexedDB;
    var req = indexedDB.open("sudoku", 1);

    req.onerror = function (event) {
      // Handle errors!
    };
    req.onsuccess = function () {
      db = req.result;
      db.transaction(['sudoku'], 'readonly').objectStore('sudoku').get('suFacil') = function (event) {
        //console.log(event.target.result.tipo);
        var array = event.target.result.nums[0].num[0];
        console.log(array);
      }
    };
  }

}
var db;

var json = [
  {
    tipo: "suFacil",
    nums: [
      [{ num: 8 }, { num: 1 }, { num: 7 }, { num: 5 }, { num: 9 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 6 }],
      [{ num: 2 }, { num: 3 }, { num: 6 }, { num: 8 }, { num: 4 }, { num: 7 }, { num: 1 }, { num: 9 }, { num: 5 }],
      [{ num: 9 }, { num: 4 }, { num: 5 }, { num: 6 }, { num: 3 }, { num: 1 }, { num: 8 }, { num: 7 }, { num: 2 }],
      [{ num: 7 }, { num: 9 }, { num: 4 }, { num: 2 }, { num: 6 }, { num: 8 }, { num: 5 }, { num: 1 }, { num: 3 }],
      [{ num: 3 }, { num: 2 }, { num: 1 }, { num: 4 }, { num: 7 }, { num: 5 }, { num: 6 }, { num: 8 }, { num: 9 }],
      [{ num: 6 }, { num: 5 }, { num: 8 }, { num: 3 }, { num: 1 }, { num: 9 }, { num: 7 }, { num: 2 }, { num: 4 }],
      [{ num: 1 }, { num: 6 }, { num: 3 }, { num: 9 }, { num: 8 }, { num: 4 }, { num: 2 }, { num: 5 }, { num: 7 }],
      [{ num: 5 }, { num: 8 }, { num: 9 }, { num: 7 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 6 }, { num: 1 }],
      [{ num: 4 }, { num: 7 }, { num: 2 }, { num: 1 }, { num: 5 }, { num: 6 }, { num: 9 }, { num: 3 }, { num: 8 }]
    ]
  },
  {
    tipo: "suNormal",
    nums: [
      [{ num: 8 }, { num: 1 }, { num: 6 }, { num: 7 }, { num: 9 }, { num: 5 }, { num: 3 }, { num: 2 }, { num: 4 }],
      [{ num: 7 }, { num: 9 }, { num: 3 }, { num: 2 }, { num: 4 }, { num: 1 }, { num: 5 }, { num: 6 }, { num: 8 }],
      [{ num: 4 }, { num: 5 }, { num: 2 }, { num: 8 }, { num: 3 }, { num: 6 }, { num: 1 }, { num: 7 }, { num: 9 }],
      [{ num: 3 }, { num: 7 }, { num: 9 }, { num: 1 }, { num: 6 }, { num: 4 }, { num: 2 }, { num: 8 }, { num: 5 }],
      [{ num: 5 }, { num: 4 }, { num: 1 }, { num: 3 }, { num: 2 }, { num: 8 }, { num: 7 }, { num: 9 }, { num: 6 }],
      [{ num: 6 }, { num: 2 }, { num: 8 }, { num: 5 }, { num: 7 }, { num: 9 }, { num: 4 }, { num: 1 }, { num: 3 }],
      [{ num: 9 }, { num: 6 }, { num: 7 }, { num: 4 }, { num: 5 }, { num: 2 }, { num: 8 }, { num: 3 }, { num: 1 }],
      [{ num: 2 }, { num: 8 }, { num: 5 }, { num: 9 }, { num: 1 }, { num: 3 }, { num: 6 }, { num: 4 }, { num: 7 }],
      [{ num: 1 }, { num: 3 }, { num: 4 }, { num: 6 }, { num: 8 }, { num: 7 }, { num: 9 }, { num: 5 }, { num: 2 }]
    ]
  },
  {
    tipo: "suDificil",
    nums: [
      [{ num: 6 }, { num: 7 }, { num: 5 }, { num: 4 }, { num: 1 }, { num: 9 }, { num: 2 }, { num: 8 }, { num: 3 }],
      [{ num: 9 }, { num: 4 }, { num: 3 }, { num: 6 }, { num: 8 }, { num: 2 }, { num: 7 }, { num: 1 }, { num: 5 }],
      [{ num: 1 }, { num: 8 }, { num: 2 }, { num: 5 }, { num: 3 }, { num: 7 }, { num: 6 }, { num: 4 }, { num: 9 }],
      [{ num: 7 }, { num: 9 }, { num: 8 }, { num: 3 }, { num: 6 }, { num: 5 }, { num: 1 }, { num: 2 }, { num: 4 }],
      [{ num: 3 }, { num: 1 }, { num: 6 }, { num: 2 }, { num: 7 }, { num: 4 }, { num: 5 }, { num: 9 }, { num: 8 }],
      [{ num: 5 }, { num: 2 }, { num: 4 }, { num: 8 }, { num: 9 }, { num: 1 }, { num: 3 }, { num: 7 }, { num: 6 }],
      [{ num: 2 }, { num: 3 }, { num: 7 }, { num: 9 }, { num: 4 }, { num: 6 }, { num: 8 }, { num: 5 }, { num: 1 }],
      [{ num: 8 }, { num: 5 }, { num: 9 }, { num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 6 }, { num: 7 }],
      [{ num: 4 }, { num: 6 }, { num: 1 }, { num: 7 }, { num: 5 }, { num: 8 }, { num: 9 }, { num: 3 }, { num: 2 }]
    ]
  },
];

var suJson = new Partida(json);

suJson.guardarSudoku();
suJson.mostrarSudoku();
Vue.component('home', {
  template: `
  <div>
  <div class="home-container">
    <h2>Puntuaciones</h2>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Dificultad</th>
          <th scope="col">Aciertos</th>
          <th scope="col">Errores</th>
          <th scope="col">Tiempo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  `
});

Vue.component('pie-pagina', {
  template: `
  <footer class="mastfoot mt-auto">
    <div class="inner">
      <p>&copy Sudoku! M06UF3 DAW2.</p>
      <p>Creado por Victor Lucas y Marcos Abaurrea</p>
    </div>
  </footer>  
  `
});

Vue.component('su-facil', {
  template: `<div>
  <div class="home-container">
  <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. </p>
  <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.  </p>  
  </div>
  </div>`
});

Vue.component('su-normal', {
  template: `<div>
  <div class="home-container">
  <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. </p>
  <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.  </p>
  <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.  </p> 
  </div>
  </div>`
});

Vue.component('su-dificil', {
  template: `<div>
  <div class="home-container">
  <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. </p>
  <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.  </p>
  <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.  </p>
  <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.  </p>  
  </div>
  </div>`
});

const error = {
  data: function () {
    return {
      url: window.location.hash
    };
  },
  template: `
  <div>
    <p>URL no encaminada : {{url}} </p>
  </div>
  `
};
const home = {
  template: '<home></home>'
};
const facil = {
  template: '<su-facil></su-facil>'
};
const normal = {
  template: '<su-normal></su-normal>'
};
const dificil = {
  template: '<su-dificil></su-dificil>'
};

const rutes = {
  '#/': home,
  '#/sudoku/facil': facil,
  '#/sudoku/normal': normal,
  '#/sudoku/dificil': dificil
};

const DEFAULT_TRANSITION = 'fade';

var app = new Vue({
  el: '#app',
  data: function () {
    return {
      rutaActual: window.location.hash,
      rutes: rutes,
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
    };
  },
  methods: {
    navegar: function ($event) {
      this.rutaActual = $event.target.hash;
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
  computed: {
    vistaActual: function () {
      return this.rutes[this.rutaActual] || error;
    }
  },
  template: `
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <h2 class="text-light h2-nav">Sudoku!</h2>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#/" v-on:click="navegar">Home</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sudokus
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item"  href="#/sudoku/facil" v-on:click="navegar">Fácil</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item"  href="#/sudoku/normal" v-on:click="navegar">Normal</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item"  href="#/sudoku/dificil" v-on:click="navegar">Difícil</a>
              </div>
            </li>
          </ul>
         </div>
      </nav>
      <transition :name="transitionName" mode="out-in" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
        <div v-bind:is="vistaActual"></div>
      </transition>
      <pie-pagina></pie-pagina>
    </div>
    `
});