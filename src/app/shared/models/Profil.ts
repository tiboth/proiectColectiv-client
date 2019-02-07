export class Profil {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  region: string;
  age: number;
  email: string;
  mobileNr: string

  constructor(id: number, firstName: string, lastName: string, image: string, region: string, age: number, email: string, mobileNumber: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.image = image;
    this.region = region;
    this.age = age;
    this.email = email;
    this.mobileNr = mobileNumber;
  }
}
