import MarvelCard from './components/MarvelCard';

function App() {
  const arrayHeroes = [{
      name: 'Spiderman',
      attack: '5',
      protection: '4',
      imgSrc: require('../src/components/marvelheroes/1.png'),
    },
    {
      name: 'Captain America',
      attack: '4',
      protection: '4',
      imgSrc: require('../src/components/marvelheroes/2.png'),
    },
    {
      name: 'Iron Man',
      attack: '2',
      protection: '7',
      imgSrc: require('../src/components/marvelheroes/3.png'),
    },
    {
      name: 'Black widow',
      attack: '2',
      protection: '1',
      imgSrc: require('../src/components/marvelheroes/4.png'),
    },
    {
      name: 'Torus',
      attack: '4',
      protection: '4',
      imgSrc: require('../src/components/marvelheroes/5.png'),
    },
    {
      name: 'Hulk',
      attack: '7',
      protection: '6',
      imgSrc: require('../src/components/marvelheroes/6.png'),
    },
    {
      name: 'Deadpool',
      attack: '4',
      protection: '2',
      imgSrc: require('../src/components/marvelheroes/7.png'),
    },
    {
      name: 'Black Panther',
      attack: '4',
      protection: '3',
      imgSrc: require('../src/components/marvelheroes/8.png'),
    },
    {
      name: 'Doctor Strange',
      attack: '5',
      protection: '2',
      imgSrc: require('../src/components/marvelheroes/9.png'),
    },
    {
      name: 'Thanos',
      attack: '6',
      protection: '6',
      imgSrc: require('../src/components/marvelheroes/10.png'),
    },
    {
      name: 'Hawk eye',
      attack: '2',
      protection: '1',
      imgSrc: require('../src/components/marvelheroes/11.png'),
    },
    {
      name: 'Nick Fury',
      attack: '2',
      protection: '2',
      imgSrc: require('../src/components/marvelheroes/12.png'),
    },
    {
      name: 'Ant-Man',
      attack: '2',
      protection: '1',
      imgSrc: require('../src/components/marvelheroes/13.png'),
    },
    {
      name: 'Groot',
      attack: '1',
      protection: '1',
      imgSrc: require('../src/components/marvelheroes/14.png'),
    },
    {
      name: 'Gamora',
      attack: '2',
      protection: '3',
      imgSrc: require('../src/components/marvelheroes/15.png'),
    },
    {
      name: 'Star Lord',
      attack: '2',
      protection: '1',
      imgSrc: require('../src/components/marvelheroes/16.png'),
    },
    {
      name: 'Rocket',
      attack: '1',
      protection: '2',
      imgSrc: require('../src/components/marvelheroes/17.png'),
    },
    {
      name: 'Drax the Destroyer',
      attack: '1',
      protection: '3',
      imgSrc: require('../src/components/marvelheroes/18.png'),
    },
    {
      name: 'Winter soldier',
      attack: '1',
      protection: '2',
      imgSrc: require('../src/components/marvelheroes/19.png'),
    },
    {
      name: 'Falcon',
      attack: '3',
      protection: '2',
      imgSrc: require('../src/components/marvelheroes/20.png'),
    },
    {
      name: 'Rowdy',
      attack: '3',
      protection: '3',
      imgSrc: require('../src/components/marvelheroes/21.png'),
    },
  ];

  const marvelHeroes = arrayHeroes.map((hero) => {
    return ( 
      <MarvelCard name={hero.name} attack={hero.attack} protection={hero.protection} imgSrc={hero.imgSrc} key={`${Date.now + Math.random()} ${hero.name}`}></MarvelCard>
    )
  })
    return (
      <div className='cards'>
        {marvelHeroes}
      </div>
      );
  
}

export default App;