import {CanActivate} from '@angular/router';
import has = Reflect.has;

export class PermissionGuard implements CanActivate {
  canActivate() {
    const hasPermission: boolean = Math.random() < 0.5;

    if (!hasPermission) {
      console.log('用户无权访问此股票详情');
    }

    return hasPermission;
  }

}
