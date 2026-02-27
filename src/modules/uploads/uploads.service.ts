import { Injectable } from '@nestjs/common';
import { S3,PutObjectCommand} from '@aws-sdk/client-s3';
import { Express } from 'express';

@Injectable()
export class UploadsService {
    private s3=new S3({
        region:process.env.AWS_REGION,
        credentials:{
            accessKeyId:process.env.AWS_ACCESS_KEY_ID!,
            secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY!
        },
    });

    async uploadFile(file:Express.Multer.File){
        const key=`${Date.now()}-${file.originalname}`;

        await this.s3.send(
            new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: key,
            Body: file.buffer,
            }),
        );

        return `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${key}`;
        
    }


}
