const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

class ReceiptPointsApi {
  constructor() {
    this.app = express();
    this.port = 3000;

    // In-memory storage for receipts and points
    this.receipts = {};

    // Middleware to parse JSON body
    this.app.use(bodyParser.json());

    // Define routes
    this.app.get('/', this.getRoot.bind(this));
    this.app.post('/receipts/process', this.processReceipt.bind(this));
    this.app.get('/receipts/:id/points', this.getPoints.bind(this));

    // Server instance
    this.server = null;
  }

  // Root URL endpoint
  getRoot(req, res) {
    res.send('Welcome to the Receipt Points API');
  }

  // Process Receipts endpoint
  processReceipt(req, res) {
    const receipt = req.body;

    // Generate a unique ID for the receipt
    const id = uuidv4();

    // Store the receipt in memory
    this.receipts[id] = receipt;

    // Return the ID in the response
    res.json({ id });
  }

  // Get Points endpoint
  getPoints(req, res) {
    const id = req.params.id;

    // Retrieve the receipt from memory
    const receipt = this.receipts[id];

    if (!receipt) {
      // If receipt not found, return an error
      res.status(404).json({ error: 'Receipt not found' });
      return;
    }

    // Calculate the points based on the defined rules
    const points = this.calculatePoints(receipt);

    // Print the points on the terminal
    console.log('Total Points:', points);

    // Return the points in the response
    res.json({ points });
  }

  calculatePoints(receipt) {
    let points = 0;

    if (receipt.items.length === 0) {
      // Return 0 if the items list is null or empty
      return 0;
    }

    // Rule 1: One point for every alphanumeric character in the retailer name
    points += receipt.retailer.replace(/[^0-9a-z]/gi, '').length;

    // Rule 2: 50 points if the total is a round dollar amount with no cents
    if (Number.isInteger(parseFloat(receipt.total))) {
      points += 50;
    }

    // Rule 3: 25 points if the total is a multiple of 0.25
    if (parseFloat(receipt.total) % 0.25 === 0) {
      points += 25;
    }

    // Rule 4: 5 points for every two items on the receipt
    points += Math.floor(receipt.items.length / 2) * 5;

    // Rule 5: If the trimmed length of the item description is a multiple of 3,
    // multiply the price by 0.2 and round up to the nearest integer.
    // The result is the number of points earned.
    receipt.items.forEach((item) => {
      if (item.shortDescription.trim().length % 3 === 0) {
        const itemPoints = Math.ceil(parseFloat(item.price) * 0.2);
        points += itemPoints;
      }
    });

    // Rule 6: 6 points if the day in the purchase date is odd
    const purchaseDate = new Date(receipt.purchaseDate.replace(/-/g, '/'));
    if (purchaseDate.getDate() % 2 !== 0) {
      points += 6;
    }

    // Rule 7: 10 points if the time of purchase is after 2:00pm and before 4:00pm
    const purchaseTime = new Date(`1970-01-01T${receipt.purchaseTime}`);
    if (purchaseTime.getHours() >= 14 && purchaseTime.getHours() < 16) {
      points += 10;
    }

    return points;
  }

  start() {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }

  stop() {
    if (this.server) {
      this.server.close();
      this.server = null;
    }
  }
  
  
}

// Export the ReceiptPointsApi class
module.exports = ReceiptPointsApi;

// Create an instance of ReceiptPointsApi and start the server
const api = new ReceiptPointsApi();
api.start();
