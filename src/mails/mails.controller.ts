import { Controller, Delete, Get, Post, Param } from '@nestjs/common';
import { MailsService } from './mails.service';

@Controller('mails')
export class MailsController {

    private mailService : MailsService;

    constructor(mailService : MailsService) {
        this.mailService = mailService;
    }


    @Get()
    getAllMails() { 
        return this.mailService.getAllMails();
    }

    @Get('/:id')
    getMailById(@Param('id') id: string ) { 
        return this.mailService.getMailById(id);
    }

    @Post()
    createMail() { 
        return this.mailService.createMail();
    }

    @Delete('/:id')
    deleteById(@Param('id') id: string) { 
        return this.mailService.deleteById(id);
    }


    @Get('/refresh')
    refreshMailBox() { }
}

