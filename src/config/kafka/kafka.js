import { Kafka } from 'kafkajs';
import variables from '../../helpers/variables.js';

export const kafka = new Kafka({
  clientId: variables.kafka.clientId,
  brokers: [process.env.KAFKA_BROKER]
});
