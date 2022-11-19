function solution(hp) {
    let first = Math.floor(hp / 5);
    let second = Math.floor((hp % 5) / 3);
    let last = Math.floor(((hp % 5) % 3) / 1);
    return first + second + last;
}