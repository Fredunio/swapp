import { S3Client } from "@aws-sdk/client-s3";

const region = process.env.S3_BUCKET_REGION_ITEM_IMAGES;
const accessKeyId = process.env.AWS_USER_ACCESS_KEY;
const secretAccessKey = process.env.AWS_USER_SECRET_ACCESS_KEY;

if (!region) {
  throw new Error("S3_BUCKET_REGION_ITEM_IMAGES is not set");
}
if (!accessKeyId) {
  throw new Error("AWS_USER_ACCESS_KEYis not set");
}
if (!secretAccessKey) {
  throw new Error("AWS_USER_SECRET_ACCESS_KEY is not set");
}

export const ServerS3Client = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});
