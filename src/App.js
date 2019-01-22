import React, { Component } from 'react';
import './App.css';
import Parents from './components/Parents';
import LoginPage from './components/LoginPage';


class App extends Component {



  render() {
    return (
      <div className="App">

       <LoginPage/>

      </div>
    );
  }
}

export default App; 




















































// import React, { Component } from 'react';
// import './App.css';
// import Parents from './components/Parents';
// import Loginpage from './components/LoginPage'

// class App extends Component {

//   state = {
//     title: 'something'
//   }

//   changeTheWord = (newTitle) => {
//     this.setState ({title: newTitle});
//   }

//   render() {
//     return (
//       <div className="App">

//         <Parents changeTheWordEvent={this.changeTheWord.bind(this, 'new word') }
//          keepTheWordSameEvent={this.changeTheWord.bind(this, 'same word') }        
//          title= {this.state.title} />

//       </div>
//     );
//   }
// }

// export default App; 
