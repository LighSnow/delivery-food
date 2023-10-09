// eslint-disable-next-line no-undef
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./server/db/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/partner/:name", (req, res) => {
  const { name } = req.params;
  const db = router.db.getState();
  const partner = db.partners.find((p) => p.name === name);

  if (!partner) {
    return res.sendStatus(404);
  }

  const productsName = partner.products.replace(/\.json$/, "");
  const products = db[productsName];

  res.jsonp({
    kitchen: partner.kitchen,
    name: partner.name,
    stars: partner.stars,
    price: partner.price,
    products,
  });
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
