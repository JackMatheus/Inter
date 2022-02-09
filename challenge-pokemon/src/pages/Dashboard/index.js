import { useEffect, useState } from 'react';
import Text from '../../components/Text';
import api from '../../services/api';

function Dashboard() {
  // eslint-disable-next-line no-unused-vars
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line quotes
    // console.log("renderizou");
    // 1-useEffect recuperando info da api
    async function getItems() {
      const { data } = await api.get('/pokemon');
      // console.log(data);
      // setPokemon(data.results);

      const resp = await Promise.all(data.results.map((item) => api.get(item.url)));
      // eslint-disable-next-line no-console
      // eslint-disable-next-line quotes
      // eslint-disable-next-line no-console
      console.log('Resp', resp);

      const format = resp.map((req) => req.data);
      setPokemon(format);

      // Jeito equivocado de fazer as requisições
      // eslint-disable-next-line no-restricted-syntax
      // for (const item of data.results) {
      //   // eslint-disable-next-line indent
      //   // eslint-disable-next-line semi
      //   const resp = await api.get(item.url);
      //   console.log(resp);
      // }
    }
    // 2-Reenderizando as informações no front do react >>
    // Para tal usarei useState para gerenciar o estado
    getItems();
  }, []);
  // console.log('Pokemon', pokemon);

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      <Text as="h1">Dashborad</Text>
      <Text as="h2">Search for Pokémon by name or using the National Pokédex number</Text>

      {
        // 2.1-Reenderizando//do hook estado=pokemon.map do item
        pokemon.length > 0 && pokemon.map((item) => (
          // eslint-disable-next-line react/jsx-props-no-multi-spaces
          <div key={item.id}>
            {item.name}

            <img src={item.sprites.front_default} alt={item.name} />

          </div>
        ))
      }

    </div>
  );
}
// eslint-disable-next-line eol-last
export default Dashboard;
