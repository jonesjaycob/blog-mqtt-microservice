import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { MqttController } from './mqtt.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MQTT_BACKEND_SERVICE',
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://localhost:1883',
        },
      },
    ]),
  ],
  controllers: [MqttController],
})
export class MqttModule {}
