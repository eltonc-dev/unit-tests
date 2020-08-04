export class Counter {
    total = 0;

    add(num = 1) {
        this.total += num;
    }
}