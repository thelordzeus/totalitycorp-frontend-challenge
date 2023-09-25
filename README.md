# Snicks - Your Online Shoe Store

Welcome to Snicks, your one-stop destination for the latest and trendiest shoes! Snicks is an e-commerce website.

## Tech Stack

- Next.js 13
- Tailwind CSS
- ShadCN UI
- pnpm

## Clone and Run Locally

To run Snicks locally on your machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/thelordzeus/totalitycorp-frontend-challenge
   ```

2. Navigate to the project directory:

   ```bash
   cd snicks
   ```

3. Install project dependencies using pnpm:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

5. Open your web browser and visit `http://localhost:3000` to view the app.

## Challenges Faced

<!-- Insert your challenges and solutions here -->

## App Walkthrough

Snicks is designed to provide a seamless shopping experience for shoe enthusiasts. Here's a quick walkthrough of how the app works:

### Home Page

- When you first visit the app, you'll land on the home page, where you can browse through the latest shoe collections.
- Click on any shoe to view more details, including images, price, and product description.

### Shopping Cart

- To add a shoe to your shopping cart, simply click the "Add to Cart" button on the product detail page.
- The shopping cart icon at the top right corner of the screen will show the number of items in your cart.
- You can click on the cart icon to view the items in your cart and proceed to checkout.

### Checkout

- When you're ready to complete your purchase, click the "Checkout" button in the shopping cart.
- Follow the prompts to enter your shipping information and payment details.
- Review your order and confirm your purchase.

### Context for Cart Updates

- Snicks uses context to manage the shopping cart. When you click "Add to Cart," the app updates the cart context, reflecting the added item.
- The cart context ensures that your selected items are preserved as you navigate through the app.
- You can easily remove items from the cart or update quantities before proceeding to checkout.
