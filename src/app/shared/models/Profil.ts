export class Profil {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  region: string;

  constructor(id: number, firstName: string, lastName: string, image: string, region: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.image = image;
    this.region = region;
  }
}
