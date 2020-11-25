export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Seat leon 2015',
        name: 'John',
        phone: '54655487',
        email: 'john@doe.com',
        location: 'Warsaw',
        price: '2137',
        date: '24.11.2020',
        content: 'Low budget car, 1st driver',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2016_SEAT_Leon_SE_Dynamic_Technology_1.2.jpg/800px-2016_SEAT_Leon_SE_Dynamic_Technology_1.2.jpg',
      },
      {
        id: '2',
        title: 'Merida bicycle',
        name: 'Jane',
        phone: '54655487',
        email: 'jane@smith.com',
        location: 'Gdansk',
        price: '545',
        date: '12.10.2020',
        content: 'Used bicycle, but looks as new, nothing is broken',
        img: 'https://www.bikko.pl/media/catalog/product/cache/1/image/b38cf51ec77170b109c5e310157197eb/2/9/29_1800-d_1_1.jpg',
      },
      {
        id: '3',
        title: 'Broom',
        name: 'Mark',
        phone: '56482',
        email: 'mark@com.com',
        location: 'Hogwart',
        price: '3',
        date: '05.09.2020',
        content: 'Broom to fly and to clean, used by Harry Potter',
        img: 'http://vignette2.wikia.nocookie.net/harrypotter/images/c/cb/Nimbus_2000_de_Harry_Potter.jpg/revision/latest?cb=20120815185901&path-prefix=fr',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  users: [
    {
      id: '1',
      email: 'john@doe.com',
    },
    {
      id: '2',
      email: 'jane@smith.com',
    },
    {
      id: '3',
      email: 'mark@com.com',
    },
  ],
};
