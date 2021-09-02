import { LoggerMiddleware } from './user/logger.middleware';

describe('LoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggerMiddleware()).toBeDefined();
  });
});
