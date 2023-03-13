import resizer from '../util/resizers';
import { Request, Response } from 'express';
import express from 'express';

describe('Test resized image function', () => {
  it('It should have a resizer function', () => {
    expect(resizer).toBeDefined();
  });
});
