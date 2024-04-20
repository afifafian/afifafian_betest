import { kafka } from '../../config/kafka/kafka.js';
import { UserLogic } from '../../logics/user.js';
import { userValidator } from '../../helpers/validators/index.js';
import variables from '../../helpers/variables.js';

const consumer = kafka.consumer({ groupId: variables.kafka.groupId });

const kafkaRunner = async () => {
  await consumer.subscribe({
    topic: process.env.KAFKA_TOPIC,
    fromBeginning: false,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        const kafkaMsg = JSON.parse(message.value.toString());
        const validator = userValidator.mutateDataValidator(kafkaMsg);
        if (validator.length) throw { name: variables.errNames.customValidation, message: validator };

        await UserLogic.createUser(kafkaMsg);
        console.log("Successfully created new user");
      } catch (err) {
        console.log(err);
      }
    }
  })
}

export {
  kafkaRunner
};
