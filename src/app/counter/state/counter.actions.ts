import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const customIncrement = createAction('customincrement',props<{customNumber : number}>());
export const changeChannelName = createAction('changeChannelName',props<{channelName : string}>());

