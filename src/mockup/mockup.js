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
      background: '#FFFFFF',
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
        name: 'Conga 1',
        category: 'Aspiradora',
        price: 500,
        img: require('../assets/products/conga.png'),
        info:
          'Ideal para pequeños pisos. Podrás dirigir el robot desde la app',
      },
      {
        name: 'Termomix',
        category: 'Cocina',
        price: 500,
        img: require('../assets/products/termomix.png'),
        info:
          'La cocina nunca ha sido tan divertida como lo es con termomix CECOTEC. Haz lo que quieras, cuando quieras, y de una manera fácil y rápida.',
      },
      {
        name: 'Conga 2',
        category: 'Aspiradora',
        price: 500,
        img: require('../assets/products/conga.png'),
        info:
          'La mejor aspiradora del mercado. Podrás dirigir el robot desde la app',
      },
      {
        name: 'Scooter Electrica',
        category: 'Patín',
        price: 500,
        img: require('../assets/products/moto1.png'),
        info:
          'Ve a todas partes con Scooter eléctrica. Ideal para moverte por la ciudad. Carga ultra rápida.',
      },
      {
        name: 'Conga 3',
        category: 'Aspiradora',
        price: 500,
        img: require('../assets/products/conga.png'),
        info:
          'Con una autonomía de hasta 5 horas. Podrás dirigir el robot desde la app',
      },
      {
        name: 'Scooter Electrica 2',
        category: 'Patín',
        price: 500,
        img: require('../assets/products/moto2.png'),
        info:
          'Ve a todas partes con Scooter eléctrica. Ideal para moverte por la ciudad. Carga ultra rápida.',
      },
      {
        name: 'Scooter Electrica 3',
        category: 'Patín',
        price: 500,
        img: require('../assets/products/moto3.png'),
        info:
          'Ve a todas partes con Scooter eléctrica. Ideal para moverte por la ciudad. Carga ultra rápida.',
      }
    ];
  