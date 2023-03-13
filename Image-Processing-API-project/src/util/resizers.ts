import fs from 'fs';
import sharp from 'sharp';
import express from 'express';
import path from 'node:path';
import { existsSync } from 'node:fs';

const resizer = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  //query parameters
  const { width, height } = req.query;
  const widthImage = width as string;
  const heightImage = height as string;
  const imageName: string = (req.query.name as string).toLowerCase();
  const imagePath: string = path.resolve(`Resized/${imageName}.jpg`);
  const originalImagePath: string = path.resolve(`Thumbs/${imageName}.jpg`);
  const imageWidth: number = parseInt(width as string) as number;
  const imageHeight: number = parseInt(height as string) as number;

  if (imageWidth <= 0 || imageHeight <= 0) {
    res.send(
      'Invalid input: the expected width and height parameters should be positive integers greater than zero'
    );
  } else if (isNaN(Number(widthImage)) || isNaN(Number(heightImage))) {
    res.send(
      'The expected width and height parameters should be positive integers'
    );
  } else if (!fs.existsSync(originalImagePath)) {
    res.send(
      'The incoming filename does not exist as image in the library: Kindly Select from this list => ["encenadaport", "fjord", "icelandwaterfall", "palmtunnel", "santamonica"]'
    );
  } else {
    try {
      const readStream = fs.createReadStream(`Thumbs/${imageName}.jpg`);

      //check if the image already in existence
      if (!fs.existsSync(imagePath)) {
        //Else resize the image and save it to resized folder
        const reshape = sharp();

        readStream.pipe(reshape.resize(imageWidth, imageHeight)).pipe(res);

        await sharp(`Thumbs/${imageName}.jpg`)
          .resize(imageWidth, imageHeight)
          .toFile(`Resized/${imageName}-${widthImage}-${heightImage}.jpg`);
      } else {
        res.sendFile(imagePath);
      }
      next();
    } catch (err) {
      throw new Error(`Unable to resize the image: ${err}`);
    }
  }
};

export default resizer;
