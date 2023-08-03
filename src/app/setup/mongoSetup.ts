import mongoose, { ConnectOptions } from "mongoose";
import { discoverService } from "./AWSDiscovery";

export let safeDB: mongoose.Connection | null = null;

const mongoSetup = async () => {
  const mongoIp = await discoverService("us-east-1", {
    NamespaceName: "dev",
    ServiceName: "mongo-s",
    MaxResults: 10,
  });

  safeDB = await mongoose.createConnection(
    `mongodb+srv://michael:qQbl9i98Ar2IM934@cluster0.ynbmgmg.mongodb.net/failean-tst?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  );

  safeDB.on("error", console.error.bind(console, "connection error:"));
  safeDB.once("open", function () {
    // we're connected!
    console.log("safe main DB connected successfully");
  });
};

export default mongoSetup;