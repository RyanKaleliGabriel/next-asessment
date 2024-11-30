This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup instructions.

Clone the repository :

```bash
git clone https://github.com/RyanKaleliGabriel/next-asessment.git

```

Create a .env file and add the base url of the json server:

```bash
BASE_URL=http://localhost:3001
```
Run the app:

```bash
 npm run start:mock & npm run dev
```
## A description of the platform and its features.
- Shop Management. All CRUD operations.
- Product Management. All CRUD operations
- Search filter and Pagination.
- Overview Metrics. Total Number of shops and products. Total value of products in shops. Total Stock Level.
- Product Stock status. Graph chart.
- Top 5 Shops by Stock Level.
- Real time data updates.

## Instructions for testing the admin panel and its features.

- The products section. The product section has a paginated list of all products from the json server. You can filter the products by prices and stock level in ascending and descending order. The user can also search for the products by typing the full name of the product. Each product has a menu toggle button that pops out the menu buttons for deleting and editing each product. 

- The shops section. The shops section has a paginated list of all shops from the json server. The user can also search for the shop by typing the full name of the shop. Each shop has a menu toggle button that pops out the menu buttons for deleting and editing each shop. 

- The dashboard side has realtime data stats and chart visualizations. Anytime you update data from the two sections the stats are updated. 