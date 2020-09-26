import { Story } from '../story';
import { Observable, of, merge } from 'rxjs';
import { delay } from 'rxjs/operators';

export function imageMixin() {
  return class {
    fade(): Observable<{ fade: boolean }> {
      const obsA = of({ fade: true });
      const obsB = of({ fade: false }).pipe(delay(800));
      return merge(obsA, obsB);
    }
  };
}
