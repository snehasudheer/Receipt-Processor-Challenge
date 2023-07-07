const ReceiptPointsApi = require('../index');

describe('Receipt Processing Unit Tests', () => {
  
  test('Test case 1', () => {
    const api = new ReceiptPointsApi();
    const receipt = {
      retailer: 'Target',
      purchaseDate: '2022-01-01',
      purchaseTime: '13:01',
      items: [
        {
          shortDescription: 'Mountain Dew 12PK',
          price: '6.49'
        },
        {
          shortDescription: 'Emils Cheese Pizza',
          price: '12.25'
        },
        {
          shortDescription: 'Knorr Creamy Chicken',
          price: '1.26'
        },
        {
          shortDescription: 'Doritos Nacho Cheese',
          price: '3.35'
        },
        {
          shortDescription: '   Klarbrunn 12-PK 12 FL OZ  ',
          price: '12.00'
        }
      ],
      total: '35.35'
    };

    const points = api.calculatePoints(receipt);
    expect(points).toBe(28);
  });

  test('Test case 2', () => {
    const api = new ReceiptPointsApi();
    const receipt = {
      retailer: 'M&M Corner Market',
      purchaseDate: '2022-03-20',
      purchaseTime: '14:33',
      items: [
        {
          shortDescription: 'Gatorade',
          price: '2.25'
        },
        {
          shortDescription: 'Gatorade',
          price: '2.25'
        },
        {
          shortDescription: 'Gatorade',
          price: '2.25'
        },
        {
          shortDescription: 'Gatorade',
          price: '2.25'
        }
      ],
      total: '9.00'
    };

    const points = api.calculatePoints(receipt);
    expect(points).toBe(109);
  });

  test('Test case 3', () => {
    const api = new ReceiptPointsApi();
    const receipt = {
      retailer: 'Walmart',
      purchaseDate: '2022-07-15',
      purchaseTime: '10:00',
      items: [],
      total: '0.00'
    };
  
    const points = api.calculatePoints(receipt);
    expect(points).toBe(0);
  });
  
  test('Test case 4 ', () => {
    const api = new ReceiptPointsApi();
    const receipt = {
      retailer: 'Best Buy',
      purchaseDate: '2022-05-10',
      purchaseTime: '16:45',
      items: [
        {
          shortDescription: 'Apple iPhone 12',
          price: '999.00'
        }
      ],
      total: '999.00'
    };
  
    const points = api.calculatePoints(receipt);
    expect(points).toBe(282);
  });
  
  test('Test case 5 ', () => {
    const api = new ReceiptPointsApi();
    const receipt = {
      retailer: 'Amazon',
      purchaseDate: '2022-03-01',
      purchaseTime: '14:30',
      items: [
        {
          shortDescription: 'USB Flash Drive',
          price: '8.99'
        }
      ],
      total: '8.50'
    };
  
    const points = api.calculatePoints(receipt);
    expect(points).toBe(49);
  });
  
  test('Test case 6 ', () => {
    const api = new ReceiptPointsApi();
    const receipt = {
      retailer: 'Target',
      purchaseDate: '2022-11-11',
      purchaseTime: '11:11',
      items: [
        {
          shortDescription: 'Socks',
          price: '5.99'
        }
      ],
      total: '5.99'
    };
  
    const points = api.calculatePoints(receipt);
    expect(points).toBe(12);
  });
  
  test('Test case 7', () => {
    const api = new ReceiptPointsApi();
    const receipt = {
      retailer: 'Starbucks',
      purchaseDate: '2022-09-30',
      purchaseTime: '14:30',
      items: [
        {
          shortDescription: 'Cappuccino',
          price: '4.99'
        }
      ],
      total: '4.99'
    };
  
    const points = api.calculatePoints(receipt);
    expect(points).toBe(19);
  });
  
  test('Test case 8 ', () => {
    const api = new ReceiptPointsApi();
    const receipt = {
      retailer: 'Petco',
      purchaseDate: '2022-06-05',
      purchaseTime: '11:30',
      items: [
        {
          shortDescription: 'Cat Food',
          price: '9.99'
        },
        {
          shortDescription: 'Dog Treats',
          price: '5.49'
        }
      ],
      total: '15.48'
    };
  
    const points = api.calculatePoints(receipt);
    expect(points).toBe(16);
  });
  
  test('Test case 9 ', () => {
    const api = new ReceiptPointsApi();
    const receipt = {
      retailer: 'Grocery Store',
      purchaseDate: '2022-04-23',
      purchaseTime: '10:30',
      items: [
        {
          shortDescription: 'Milk',
          price: '2.99'
        },
        {
          shortDescription: 'Eggs',
          price: '1.99'
        },
        {
          shortDescription: 'Bread',
          price: '3.49'
        },
        {
          shortDescription: 'Apples',
          price: '4.99'
        },
        {
          shortDescription: 'Chicken',
          price: '9.99'
        }
      ],
      total: '23.45'
    };
  
    const points = api.calculatePoints(receipt);
    expect(points).toBe(29);
  });
  
  test('Test case 10 ', () => {
    const api = new ReceiptPointsApi();
    const receipt = {
      retailer: 'Home Depot',
      purchaseDate: '2022-12-10',
      purchaseTime: '09:30',
      items: [
        {
          shortDescription: 'Paint',
          price: '24.99'
        }
      ],
      total: '24.99'
    };
  
    const points = api.calculatePoints(receipt);
    expect(points).toBe(9);
  });

  
  
});
