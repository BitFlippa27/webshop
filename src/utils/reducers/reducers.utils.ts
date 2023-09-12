import { AnyAction } from "redux";
//some actions have no payload so we have to restructure the code
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
}

export type Action<T> = {
  type: T
}

//if a createAction gets no payload then we get back an Action<T> 
//if a createAction gets a payload then we get back an ActionWithPayload<T> 

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string, P>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

