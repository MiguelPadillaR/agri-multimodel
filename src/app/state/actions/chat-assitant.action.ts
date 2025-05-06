import { createAction, createActionGroup, props } from '@ngrx/store';

export const sendUserInput = createAction('Send user input to AgrIA', props<{ userInput: string }>());