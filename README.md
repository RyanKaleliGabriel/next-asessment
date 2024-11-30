This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup instructions.

Clone the repository :

```bash
git clone https://github.com/RyanKaleliGabriel/next-asessment.git

```

Create a .env file and add the base url of the json server:

```bash
BASE_URL=http://localhost:3000
```

Run the json server (will run in port 3000):

```bash
npx json-server db.json
```

Run the development server (will run in port 3001):

```bash
npm run dev
```
## A description of the platform and its features.
- Shop Management. All CRUD operations.
- Product Management. All CRUD operations
- Search filter and Pagination.
- Overview Metrics. Total Number of shops and products. Total value of products in shops. Total Stock Level.
- Product Stock status. Graph chart.
- Real time data updates.


