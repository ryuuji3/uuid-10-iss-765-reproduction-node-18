import { createId } from ".";

test('createId returns a string', () => {
    expect(typeof createId()).toBe('string');
});