import helloWorld from '../helloWorld';

describe('helloWorld', () => {
    test('returns "Hello, World!"', () => {
        expect(helloWorld()).toBe('Hello, World!');
    });
});