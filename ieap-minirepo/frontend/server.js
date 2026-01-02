import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  let javaStatus = "DOWN";
  let pythonStatus = "DOWN";

  try {
    const javaResp = await fetch("http://java-svc:8080/api/health");
    const data = await javaResp.json();

    javaStatus = data.status;
    pythonStatus = data.python?.includes("UP") ? "UP" : "DOWN";
  } catch (e) {
    console.error("Backend not reachable");
  }

  res.send(`
    <html>
      <head>
        <title>IEAP Mini Frontend</title>
      </head>
      <body style="font-family: Arial">
        <h1>IEAP Mini Frontend</h1>

        <h3 style="color:${javaStatus === "UP" ? "green" : "red"}">
          Java Backend: ${javaStatus}
        </h3>

        <h3 style="color:${pythonStatus === "UP" ? "green" : "red"}">
          Python Parser: ${pythonStatus}
        </h3>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});
