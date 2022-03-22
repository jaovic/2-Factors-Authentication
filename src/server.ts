import { app } from "./app";
import config from "./config/index";

app.listen(config.PORT, () =>
  console.log(`Server is running on PORT ${config.PORT}`)
);
