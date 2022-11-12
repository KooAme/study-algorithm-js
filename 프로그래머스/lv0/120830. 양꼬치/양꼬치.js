function solution(n, k) {
    let meatPrice = n * 12000;
    let disc = Math.floor(n / 10);
    let drinkPrice = (k - disc) * 2000;
    return meatPrice + drinkPrice;
}