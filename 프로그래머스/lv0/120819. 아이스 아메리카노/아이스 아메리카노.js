function solution(money) {
    var answer = [];
    let coffee = Math.floor(money / 5500)
    let moneyLeft =  money % 5500
    answer[0] = coffee;
    answer[1] = moneyLeft;
    return answer;
}