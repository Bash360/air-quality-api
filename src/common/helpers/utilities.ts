export default class Utility{

 static isValidCoordinates(latitude: number, longitude: number):boolean{
 const isLatitudeValid = latitude >= -90 && latitude <= 90;
  const isLongitudeValid = longitude >= -180 && longitude <= 180;
  return isLatitudeValid && isLongitudeValid;
  }
}