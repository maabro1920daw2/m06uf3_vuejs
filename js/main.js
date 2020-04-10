class Jugador {}

class Partida {
  constructor(sudoku){
    this.sudoku = sudoku;
  }

  guardarSudoku() {
    const indexedDB = window.indexedDB;
    var request = indexedDB.open("sudoku", 1);
    var sud = this.sudoku;
    request.onerror = function(event) {
      console.log("Error: ",event.target.errorCode);
    }
    request.onupgradeneeded = function () {
      db = request.result;
      const objectStore = db.createObjectStore('sudoku', { autoIncrement: true});
      objectStore.createIndex('num','num',{ unique: false });
      objectStore.transaction.oncomplete = function() {
        var transaction = db.transaction(['sudoku'], 'readwrite').objectStore('sudoku');
        transaction.add(sud);
      }
    };
    request.onsuccess = function(event) {
      db = request.result;
    }
  }
}
var db;

var json = {
  "suFacil": [
    [{ num: 8 }, { num: 1 }, { num: 7 }, { num: 5 }, { num: 9 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 6 }],
    [{ num: 2 }, { num: 3 }, { num: 6 }, { num: 8 }, { num: 4 }, { num: 7 }, { num: 1 }, { num: 9 }, { num: 5 }],
    [{ num: 9 }, { num: 4 }, { num: 5 }, { num: 6 }, { num: 3 }, { num: 1 }, { num: 8 }, { num: 7 }, { num: 2 }],
    [{ num: 7 }, { num: 9 }, { num: 4 }, { num: 2 }, { num: 6 }, { num: 8 }, { num: 5 }, { num: 1 }, { num: 3 }],
    [{ num: 3 }, { num: 2 }, { num: 1 }, { num: 4 }, { num: 7 }, { num: 5 }, { num: 6 }, { num: 8 }, { num: 9 }],
    [{ num: 6 }, { num: 5 }, { num: 8 }, { num: 3 }, { num: 1 }, { num: 9 }, { num: 7 }, { num: 2 }, { num: 4 }],
    [{ num: 1 }, { num: 6 }, { num: 3 }, { num: 9 }, { num: 8 }, { num: 4 }, { num: 2 }, { num: 5 }, { num: 7 }],
    [{ num: 5 }, { num: 8 }, { num: 9 }, { num: 7 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 6 }, { num: 1 }],
    [{ num: 4 }, { num: 7 }, { num: 2 }, { num: 1 }, { num: 5 }, { num: 6 }, { num: 9 }, { num: 3 }, { num: 8 }]
  ],
  "suNormal": [
    [{ num: 8 }, { num: 1 }, { num: 6 }, { num: 7 }, { num: 9 }, { num: 5 }, { num: 3 }, { num: 2 }, { num: 4 }],
    [{ num: 7 }, { num: 9 }, { num: 3 }, { num: 2 }, { num: 4 }, { num: 1 }, { num: 5 }, { num: 6 }, { num: 8 }],
    [{ num: 4 }, { num: 5 }, { num: 2 }, { num: 8 }, { num: 3 }, { num: 6 }, { num: 1 }, { num: 7 }, { num: 9 }],
    [{ num: 3 }, { num: 7 }, { num: 9 }, { num: 1 }, { num: 6 }, { num: 4 }, { num: 2 }, { num: 8 }, { num: 5 }],
    [{ num: 5 }, { num: 4 }, { num: 1 }, { num: 3 }, { num: 2 }, { num: 8 }, { num: 7 }, { num: 9 }, { num: 6 }],
    [{ num: 6 }, { num: 2 }, { num: 8 }, { num: 5 }, { num: 7 }, { num: 9 }, { num: 4 }, { num: 1 }, { num: 3 }],
    [{ num: 9 }, { num: 6 }, { num: 7 }, { num: 4 }, { num: 5 }, { num: 2 }, { num: 8 }, { num: 3 }, { num: 1 }],
    [{ num: 2 }, { num: 8 }, { num: 5 }, { num: 9 }, { num: 1 }, { num: 3 }, { num: 6 }, { num: 4 }, { num: 7 }],
    [{ num: 1 }, { num: 3 }, { num: 4 }, { num: 6 }, { num: 8 }, { num: 7 }, { num: 9 }, { num: 5 }, { num: 2 }]
  ],
  "suDificil": [
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
};

var suJson = new Partida(json);

suJson.guardarSudoku();

Vue.component('home', {
  template: '<p>Benvinguts a Vue.js</p>'
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
  template: '<p>Sudoku fácil</p>'
});

Vue.component('su-normal', {
  template: '<p>Sudoku normal</p>'
});

Vue.component('su-dificil', {
  template: '<p>Sudoku difícil</p>'
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

var app = new Vue({
  el: '#app',
  data: function () {
    return {
      rutaActual: window.location.hash,
      rutes: rutes,
    };
  },
  methods: {
    navegar: function ($event) {
      this.rutaActual = $event.target.hash;
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
      <div v-bind:is="vistaActual"></div>
      <pie-pagina></pie-pagina>
    </div>
    `
});