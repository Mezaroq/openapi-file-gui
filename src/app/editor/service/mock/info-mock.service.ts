import {Injectable} from '@angular/core';
import {InfoObject} from "../../shared/interface/open-api/info-object";
import {ApiMock} from "../../shared/interface/apiMock";
import {InfoBuilder} from "../../shared/model/info";
import {ContactBuilder} from "../../shared/model/contact";
import {LicenseBuilder} from "../../shared/model/license";

@Injectable({
  providedIn: 'root'
})
export class InfoMockService implements ApiMock<InfoObject> {
  private info: InfoObject;

  constructor() {
  }

  getData(): InfoObject {
    this.loadData();
    return this.info;
  }

  loadData(): void {
    this.info = new InfoBuilder()
      .title('Mock test API')
      .description('Testing mock data for info')
      .version('1.0.0')
      .termsOfService('http://example.com')
      .contact(
        new ContactBuilder()
          .url('http://example.contact.com')
          .email('example@mail.com')
          .name('Steve')
          .build()
      )
      .license(
        new LicenseBuilder()
          .url('http://example.license.com')
          .name('MiT')
          .build()
      )
      .build();
  }
}
