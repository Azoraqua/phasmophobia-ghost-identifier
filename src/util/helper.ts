export function* useIdGenerator() {
    while (true) {
        yield Math.random();
    }
}