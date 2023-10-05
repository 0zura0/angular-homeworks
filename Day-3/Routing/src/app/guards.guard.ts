import { CanActivateFn } from '@angular/router';

export const guardsGuard: CanActivateFn = (route, state) => {
  console.log("guard activated",route, state);
  
  return true;
};

//ეს ვერ დავამთავრე :(
