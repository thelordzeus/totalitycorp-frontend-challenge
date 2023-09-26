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
   cd totalitycorp-frontend-challenge
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

Developing the front end was the easiest part of the task and was completed within a mere 2 hours. However, the real challenge surfaced when it came to setting up the context. While I wouldn't label it as the hardest part, it was undeniably the most challenging aspect of the project. I had prior experience with context setup in previous versions of Next.js, but Next.js 13 introduced its unique set of challenges that pushed me to explore and adapt.

One notable hurdle I encountered was an error where the items added to the cart were rendering infinitely, causing my laptop to hang. This particular issue consumed a significant amount of time to diagnose and rectify.

In addition to the context setup, I also faced challenges in integrating and styling certain components, especially when ensuring a consistent and visually appealing user interface.

Despite these challenges, each obstacle presented an opportunity for growth and learning, ultimately making the project a valuable learning experience.

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
