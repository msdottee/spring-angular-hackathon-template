import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Url } from 'url';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: Url): SafeUrl {
    const sanitizedUrlString = this.sanitizer.sanitize(SecurityContext.URL, value);
    return this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedUrlString);
  }
}
