import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class2 class3';
        expect(classNames('someClass', {}, ['class2', 'class3'])).toBe(
            expected
        );
    });
    test('with mods', () => {
        const expected = 'someClass class3 class2';
        expect(classNames('someClass', { class2: true }, ['class3'])).toBe(
            expected
        );
    });
    test('with mods dalse', () => {
        const expected = 'someClass class3 class2';
        expect(
            classNames('someClass', { class2: true, scrollable: false }, [
                'class3',
            ])
        ).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass class3 class2';
        expect(
            classNames('someClass', { class2: true, scrollable: undefined }, [
                'class3',
            ])
        ).toBe(expected);
    });
});
