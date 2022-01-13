import './App.css';
import Counter from '../Counter/Counter';
import { Fragment } from 'react';
import SmartCounter from './../SmartCounter/SmartCounter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';

//Importação de todos os componentes para o App
//Outos componentes não utilizados
// <Counter/>
// <SmartCounter/>
function App() {
  return (
      <Fragment>
      <h1>Ifood</h1>
      <IfoodCounter/>
      </Fragment>
  );
}

export default App;
