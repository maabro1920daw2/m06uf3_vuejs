class Jugador {
  constructor(acierto,error,tiempo) {
    this.acierto = acierto;
    this.error = error;
    this.tiempo = tiempo;
  }
}

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

  /*mostrarSudoku() {
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
  }*/

}
var db;
const DEFAULT_TRANSITION = 'fade';
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
var distance = 0;
suJson.guardarSudoku();
//suJson.mostrarSudoku();
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


var mixinComprobar = {
  methods: {
    evaluarJuego(dif) {
      var json2 = JSON.parse(JSON.stringify(json));
      var suOriginal = json2[dif].nums;
      var errores=0;
      var aciertos =0;
      for (var i = 0; i < 9; ++i) {
        for (var k = 0; k < 9; ++k) {
            if(suOriginal[i][k].num==this.sudokuMatrix[i][k].num){
              aciertos++;
            }
            else{
              errores++;
            }
        }
    }
    var difi;
    if(dif==0)difi="facil";
    else if(dif==1)difi="normal";
    else difi="dificil";
    var puntuacion=[{Dificultad: difi, Aciertos: aciertos, Errores: errores, Tiempo: this.minutos+"min "+this.segundos+"s"}];
    localStorage.setItem("Puntuacion", JSON.stringify(puntuacion));
    clearInterval(this.interval);
    }
  }
}

Vue.component('su-facil', {
  data: function() {
    return {
      prevHeight: 0,
      sudokuMatrix: [],
      initializeGameText: "Empezar",
      evaluateGameText: "Verificar",
      answerImage: "",
      isGameStarted: false,
      showAnswer: false,
      transitionName: DEFAULT_TRANSITION,
      tiempo: 0,
      segundos: 0,
      minutos: 0,
      interval: null,
    };
  },
  mixins: [mixinComprobar],
  methods: {
    iniciarJuego() {    
      var json2 = JSON.parse(JSON.stringify(json));
      var suFacil = json2[0].nums;
      for (var i = 0; i < 9; ++i) {
          for (var k = 0; k < 3; ++k) {
              var randomColumnIndex = Math.floor(Math.random() * suFacil.length);
              suFacil[i][randomColumnIndex].num = "";
          }
      }
      this.sudokuMatrix = suFacil;
      this.initializeGameText = "Reiniciar";
      this.isGameStarted = true;
      this.tiempo = 0;
      this.segundos = 0;
      this.minutos = 0;
      this.interval = setInterval(this.temporizador, 1000);
    },
    temporizador() {    
      this.tiempo = this.tiempo + 1000;
      this.segundos = Math.floor((this.tiempo % (1000 * 60)) / 1000);
      this.minutos = Math.floor((this.tiempo % (1000 * 60 * 60)) / (1000 * 60));
    }
  },
  template: `<div>
  <div id="app-sudoku">

  <div class="buttons-container">
      <button class="button" v-on:click="iniciarJuego()"><span>{{ initializeGameText }}</span></button>

      <transition :name="transitionName">
          <button class="button" v-on:click="evaluarJuego(0)" v-if="isGameStarted"><span>{{ evaluateGameText }}</span></button>
      </transition>
  </div>

  <div><p>Tiempo {{minutos}}min {{segundos}}s</p></div>

  <transition :name="transitionName">
      <div class="grid-sudoku" v-if="isGameStarted && !showAnswer">

          <div v-for="row in sudokuMatrix" class="grid-row">
              <div v-for="cell in row" class="grid-cell">
                  <transition-group tag="div" name="list-animation">
                      <input type="text" v-bind:key="cell.num" v-model="cell.num" class="grid-cell-editor" />
                  </transition-group>
              </div>
          </div>

      </div>
  </transition>

  <transition :name="transitionName">
      <div v-if="showAnswer" class="answer">
          <img v-bind:src="answerImage" class="answer-image" />
      </div>
  </transition>

</div>
  </div>`
});

Vue.component('su-normal', {
  data: function() {
    return {
      prevHeight: 0,
      sudokuMatrix: [],
      initializeGameText: "Empezar",
      evaluateGameText: "Verificar",
      answerImage: "",
      isGameStarted: false,
      showAnswer: false,
      transitionName: DEFAULT_TRANSITION,
      tiempo: 0,
      segundos: 0,
      minutos: 0,
      interval: null,
    };
  },
  mixins: [mixinComprobar],
  methods: {
    iniciarJuego() {    
      var json2 = JSON.parse(JSON.stringify(json));
      var suNormal = json2[1].nums;
      for (var i = 0; i < 9; ++i) {
          for (var k = 0; k < 3; ++k) {
              var randomColumnIndex = Math.floor(Math.random() * suNormal.length);
              suNormal[i][randomColumnIndex].num = "";
          }
      }
      this.sudokuMatrix = suNormal;
      this.initializeGameText = "Reiniciar";
      this.isGameStarted = true;
      this.tiempo = 0;
      this.segundos = 0;
      this.minutos = 0;
      this.interval = setInterval(this.temporizador, 1000);
    },
    temporizador() {     
      this.tiempo = this.tiempo + 1000;
      this.segundos = Math.floor((this.tiempo % (1000 * 60)) / 1000);
      this.minutos = Math.floor((this.tiempo % (1000 * 60 * 60)) / (1000 * 60));
    }
  },
  template: `<div>
  <div id="app-sudoku">

  <div class="buttons-container">
      <button class="button" v-on:click="iniciarJuego()"><span>{{ initializeGameText }}</span></button>

      <transition :name="transitionName">
          <button class="button" v-on:click="evaluarJuego(1)" v-if="isGameStarted"><span>{{ evaluateGameText }}</span></button>
      </transition>
  </div>

  <div><p>Tiempo {{minutos}}min {{segundos}}s</p></div>

  <transition :name="transitionName">
      <div class="grid-sudoku" v-if="isGameStarted && !showAnswer">

          <div v-for="row in sudokuMatrix" class="grid-row">
              <div v-for="cell in row" class="grid-cell">
                  <transition-group tag="div" name="list-animation">
                      <input type="text" v-bind:key="cell.num" v-model="cell.num" class="grid-cell-editor" />
                  </transition-group>
              </div>
          </div>

      </div>
  </transition>

  <transition :name="transitionName">
      <div v-if="showAnswer" class="answer">
          <img v-bind:src="answerImage" class="answer-image" />
      </div>
  </transition>

</div>
  </div>`
});

Vue.component('su-dificil', {
  data: function() {
    return {
      prevHeight: 0,
      sudokuMatrix: [],
      initializeGameText: "Empezar",
      evaluateGameText: "Verificar",
      answerImage: "",
      isGameStarted: false,
      showAnswer: false,
      transitionName: DEFAULT_TRANSITION,
      tiempo: 0,
      segundos: 0,
      minutos: 0,
      interval: null,
    };
  },
  mixins: [mixinComprobar],
  methods: {
    iniciarJuego() {    
      var json2 = JSON.parse(JSON.stringify(json));
      var suDificil = json2[2].nums;
      for (var i = 0; i < 9; ++i) {
          for (var k = 0; k < 3; ++k) {
              var randomColumnIndex = Math.floor(Math.random() * suDificil.length);
              suDificil[i][randomColumnIndex].num = "";
          }
      }
      this.sudokuMatrix = suDificil;
      this.initializeGameText = "Reiniciar";
      this.isGameStarted = true;
      this.tiempo = 0;
      this.segundos = 0;
      this.minutos = 0;
      this.interval = setInterval(this.temporizador, 1000);
    },
    temporizador() {    
      this.tiempo = this.tiempo + 1000;
      this.segundos = Math.floor((this.tiempo % (1000 * 60)) / 1000);
      this.minutos = Math.floor((this.tiempo % (1000 * 60 * 60)) / (1000 * 60));
    }
  },
  template: `<div>
  <div id="app-sudoku">

  <div class="buttons-container">
      <button class="button" v-on:click="iniciarJuego()"><span>{{ initializeGameText }}</span></button>

      <transition :name="transitionName">
          <button class="button" v-on:click="evaluarJuego(2)" v-if="isGameStarted"><span>{{ evaluateGameText }}</span></button>
      </transition>
  </div>

  <div><p>Tiempo {{minutos}}min {{segundos}}s</p></div>

  <transition :name="transitionName">
      <div class="grid-sudoku" v-if="isGameStarted && !showAnswer">

          <div v-for="row in sudokuMatrix" class="grid-row">
              <div v-for="cell in row" class="grid-cell">
                  <transition-group tag="div" name="list-animation">
                      <input type="text" v-bind:key="cell.num" v-model="cell.num" class="grid-cell-editor" />
                  </transition-group>
              </div>
          </div>

      </div>
  </transition>

  <transition :name="transitionName">
      <div v-if="showAnswer" class="answer">
          <img v-bind:src="answerImage" class="answer-image" />
      </div>
  </transition>

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