export declare class UploadsService {
    private s3;
    uploadFile(file: Express.Multer.File): Promise<string>;
}
