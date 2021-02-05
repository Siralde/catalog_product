/**
 * THEMES SECTIONS
 */
export const DarkTheme = {
    dark: false,
    colors: {
      primary: '#154757',
      background: '#181E25',
      card: '#262626',
      text: 'white',
      border: '#5A5A5A',
      notification: '#5A5A5A',
    },
  };
  
  export const LightTheme = {
    dark: false,
    colors: {
      primary: 'white',
      background: '#F6F6F8',
      card: 'white',
      text: 'black',
      border: '#808080',
      notification: '#bbbbbb',
    },
  };
  export const COLORS = {
    primary: '#F07F7D',
    primaryFaded: '#F3A09F',
    header: '#3b5998',
    subHeader: '#35465d',
  };
  
  //STATIC IMAGES REFERENCES
  export const IMAGES = [
    'conga1.png',
    'conga2.png',
    'conga3.png',
    'termomix.png',
  ];
  
  
  export const PRODUCTS = [
      {
        name: 'conga1',
        category: 'vacuum',
        price: 500,
        img: require('../assets/products/conga1.png'),
        info:
          'Ideal para casas amplias. Podrás dirigir el robot desde la app Conga 1',
      },
      {
        name: 'conga2',
        category: 'vacuum',
        price: 500,
        img: require('../assets/products/conga3.png'),
        info:
          'La mejor aspiradora del mercado. Podrás dirigir el robot desde la app Conga 2',
      },
      {
        name: 'conga3',
        category: 'vacuum',
        price: 500,
        img: require('../assets/products/conga1.png'),
        info:
          'Con una autonomía de hasta 4 horas. Podrás dirigir el robot desde la app Conga 3',
      },
      {
        name: 'Scooter Electrica',
        category: 'scooter',
        price: 500,
        img: require('../assets/products/moto1.png'),
        info:
          'Ve a todas partes con Scooter eléctrica. Ideal para moverte por la ciudad. Carga ultra rápida.',
      },
      {
        name: 'Scooter Electrica 2',
        category: 'scooter',
        price: 500,
        img: require('../assets/products/moto2.png'),
        info:
          'Ve a todas partes con Scooter eléctrica. Ideal para moverte por la ciudad. Carga ultra rápida.',
      },
      {
        name: 'Scooter Electrica 3',
        category: 'scooter',
        price: 500,
        img: require('../assets/products/moto3.png'),
        info:
          'Ve a todas partes con Scooter eléctrica. Ideal para moverte por la ciudad. Carga ultra rápida.',
      },
      {
        name: 'Termomix',
        category: 'termomix',
        price: 500,
        img: require('../assets/products/termomix.png'),
        info:
          'La cocina nunca ha sido tan divertida como lo es con termomix CECOTEC. Haz lo que quieras, cuando quieras, y de una manera fácil y rápida.',
      },
    ];
  