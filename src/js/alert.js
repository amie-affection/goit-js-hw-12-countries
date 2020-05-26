import { error } from '@pnotify/core';

export const myAlert = message =>
  error({
    text: message,
    type: 'error',
  });

// myAlert('Too many matches found. Please enter a more specific query!');