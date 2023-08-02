import pubsub from "../setup/redisSetup";

const Subscription = {
  jobCompleted: {
    subscribe: () => {
      console.log("Subscription to JOB_COMPLETED started");
      return (pubsub as any).asyncIterator("JOB_COMPLETED");
    },
  },
};

export default Subscription;
