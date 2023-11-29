/* eslint-disable unused-imports/no-unused-vars */
import { Buffer } from "buffer";

export class FileConverter {
  public static fileToBase64(file?: File) {
    if (!file) return;
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  /***
   * Converts a dataUrl base64 image string into a File byte array
   * dataUrl example:
   * data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAYAAABRGWr/AAAAAXNSR0IA...etc
   */
  public static dataUrlToFile(
    dataUrl: string,
    filename: string
  ): File | undefined {
    const arr = dataUrl.split(",");
    if (arr.length < 2) {
      return undefined;
    }
    const mimeArr = arr[0].match(/:(.*?);/);
    if (!mimeArr || mimeArr.length < 2) {
      return undefined;
    }

    const [_, mime] = mimeArr;
    const buff = Buffer.from(arr[1], "base64");
    return new File([buff], filename, { type: mime });
  }
}
