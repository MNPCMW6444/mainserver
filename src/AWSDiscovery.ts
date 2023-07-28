import { ServiceDiscovery } from "@aws-sdk/client-servicediscovery";

export const discoverService = async (
  region: string,
  params: any
): Promise<string> => {
  const serviceDiscovery = new ServiceDiscovery({
    region,
    credentials: {
      accessKeyId: "AKIA6MGDYZ6MAU2NZXTS",
      secretAccessKey: "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",
    },
  });
  try {
    const data = await serviceDiscovery.discoverInstances(params);
    return (
      (data.Instances && data.Instances[0].Attributes?.AWS_INSTANCE_IPV4) + ""
    );
  } catch (err) {
    console.error("Error during service discovery:", err.message);
    throw err; // Rethrow the error to be handled by the caller
  }
};
