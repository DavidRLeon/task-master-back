import { Controller } from '@nestjs/common';
import { MailService } from './mail.service';
import { UserCreateDto } from 'src/users/dto/user.create.dto';


@Controller('mail')
export class MailController {

    constructor(private mailService: MailService) {}

    async signUp(user: UserCreateDto) {
      const token = Math.floor(1000 + Math.random() * 9000).toString();
      // create user in db
      // ...
      // send confirmation mail
      await this.mailService.sendUserConfirmation(user, token);
}

}