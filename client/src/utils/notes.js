import { useFetch } from '../utils/hooks';

function Quelquechose() {

  const [data] = useFetch(
    'http://localhost:5000/api/getList'
  );

  return(

    <h1> {data} </h1>
    /*ça c'est ce que tu mets dans le composant qui doit aller chercher la data dont tu as besoin*/
  )}

  export default Quelquechose;