import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const  CanActivate = () => {
  const authentic = inject(AuthenticationService)
  const route = inject(Router)
  if(authentic.Userislogin())
    {
      return true;
    }
    else
    {
      route.navigate(['/Login'])
      return false;
    }
};
export const CanDeActivate = () => {
  const authentic = inject(AuthenticationService)
  const route = inject(Router)
  if(!authentic.Userislogin())
    {
      return true;
    }
    else
    {
      route.navigate(['/Home'])
      return false;
    }
};
