function solution(my_string) {
    var answer = '';

    for(let i = 0; i < my_string.length; i++) {
        let ch = my_string.charAt(i);
        if('a'.charCodeAt() <= ch.charCodeAt() && ch.charCodeAt() <= 'z'.charCodeAt()) {
            answer += ch.toUpperCase();
        }else if('A'.charCodeAt() <= ch.charCodeAt() && ch.charCodeAt() <= 'Z'.charCodeAt()) {
            answer += ch.toLowerCase();
        } else {
            answer += ch;
        }
    }
    return answer;
}