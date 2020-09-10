module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection('products').insertMany([
      {
        id: 1,
        name: 'sofa',
        price: 1200,
        quantity: 200,
        description: 'We have perfect blue furniture in magazine',
        currency: 'PLN',
        type: 'furniture'
      },
      {
        id: 2,
        name: ' dresser',
        price: 800,
        quantity: 20,
        currency: 'PLN',
        type: 'furniture'
      },
      {
        id: 3,
        name: 'chair',
        price: 350,
        quantity: 20,
        description: 'Chairs, unlimited edition',
        currency: 'PLN',
        type: 'furniture'
      },
      {
        id: 4,
        name: 'pillow',
        price: 30,
        quantity: 300,
        currency: 'PLN',
        type: 'additional'
      },
      {
        id: 5,
        name: 'sofa red',
        price: 1200,
        quantity: 200,
        description: 'We have perfect red furniture in magazine',
        currency: 'PLN',
        type: 'furniture'
      },
      {
        id: 6,
        name: 'dresser yellow',
        price: 800,
        quantity: 20,
        currency: 'PLN',
        type: 'furniture'
      },
      {
        id: 7,
        name: 'old wood chair',
        price: 350,
        quantity: 20,
        description: 'Chairs, unlimited wood edition',
        currency: 'PLN',
        type: 'furniture'
      },
      {
        id: 8,
        name: 'sofa pillow',
        price: 30,
        quantity: 300,
        currency: 'PLN',
        type: 'additional'
      },
      {
        id: 9,
        name: 'lamps blue',
        price: 20,
        quantity: 250,
        currency: 'PLN',
        type: 'lamps'
      },
      {
        id: 10,
        name: 'lamps yellow',
        price: 25,
        quantity: 250,
        currency: 'PLN',
        type: 'lamps'
      },
      {
        id: 11,
        name: 'lamps red',
        price: 30,
        quantity: 250,
        currency: 'PLN',
        type: 'lamps'
      },
      {
        id: 12,
        name: 'lamps green',
        price: 15,
        quantity: 250,
        currency: 'PLN',
        type: 'lamps'
      }
    ])
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
