User Stories

///
Must Have
As a user, I want to browse makeup products with images and prices, so that I can see what products are available.

As a user, I want to search for makeup products, so that I can find items quickly.

As a user, I want to add products to a shopping cart, so that I can buy multiple items at once.

As a user, I want to complete a basic checkout process, so that I can place an order.

///
Should Have

As a user, I want to filter products by category or price, so that I can easily find suitable makeup items.

As a user, I want to view product details, so that I can make better purchase decisions.

///
Could Have

As a user, I want to create an account, so that my orders can be saved.

As a user, I want to see popular or discounted products, so that I can find good deals.

Won’t Have (for MVP)

///
As a user, I want to try makeup virtually using AI, so that I can preview products.

As a seller, I want to manage my own store inside the app.

///
Home Screen:
Displays featured makeup products, categories, and prices.

Product List Screen:
Shows a list of makeup products with images, names, and prices.

Product Detail Screen:
Displays detailed information about a selected makeup product and an “Add to Cart” button.

Cart Screen:
Shows selected products, quantities, total price, and a checkout button.

Checkout Screen:
Allows users to confirm their order and complete the purchase.


///
Architecture Components

Front-End (Mobile App):
Built using a mobile framework (e.g., Flutter or React Native).
Handles user interface, product browsing, cart actions, and checkout requests.

Back-End (Server):
Built using Node.js with Express.
Handles business logic, user requests, product data processing, and order management.

Database:
Uses a database such as MongoDB or PostgreSQL.
Stores product details, prices, user information, and order data.

External Services:
Payment gateway API (for handling payments securely).
Image hosting service (for product images).

///
Data Flow Description

The user interacts with the mobile app (front-end) to browse or search for makeup products.

The front-end sends requests to the back-end server (e.g., get product list, add to cart).

The back-end retrieves or updates data from the database.

The back-end sends the requested data back to the front-end for display.

During checkout, the back-end communicates with the payment gateway API to process payments.

Order confirmation is sent back to the front-end.

User -> Mobile App: Open Home Screen
Mobile App -> Back-End: getAllProducts()
Back-End -> Database: Query products collection
Database -> Back-End: Return product list
Back-End -> Mobile App: Send product list
Mobile App -> User: Display products



Testing Strategy:

Unit Tests: Test individual back-end functions like addToCart(), getAllProducts().

Integration Tests: Test API endpoints with end-to-end flow (e.g., adding product to cart and completing checkout).

Manual Testing: Verify critical user flows such as browsing products, checkout, and payment.

Testing Tools:

Jest for unit and integration testing in Node.js.

Postman for manual and automated API testing.

Deployment Pipeline:

Staging Environment: Deploy new features for testing and QA.

Production Environment: Deploy only tested and approved code from main branch.

Use CI/CD tools (e.g., GitHub Actions) to automate tests and deployment.