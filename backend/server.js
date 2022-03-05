const app = require("./app");
const cloudinary = require("cloudinary");


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});




// Connecting to database


cloudinary.config({
  cloud_name: "dtl11nkyo",
  api_key: "375999797612671",
  api_secret: "rXX2bC8iDY2KGUqwFzItQxGZon4"
});
const PORT=3001
const server = app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
