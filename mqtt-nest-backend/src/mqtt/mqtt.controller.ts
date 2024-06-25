import { Controller, Logger } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
  Ctx,
  MqttContext,
} from '@nestjs/microservices';

@Controller('mqtt')
export class MqttController {
  private readonly logger = new Logger(MqttController.name);

  @MessagePattern('notification/email')
  getNotifications(@Payload() data: any, @Ctx() context: MqttContext) {
    const packet = context.getPacket();
    const message = packet.payload.toString(); // Convert Buffer to string
    this.logger.log(`Received notification: ${message}`);
    console.log(`Received packet: ${JSON.stringify(packet)}`);
    console.log(`Converted message: ${message}`);
  }
}
