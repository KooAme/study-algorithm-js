function solution(emergency) {
    let newEmergency = [];
    let cnt = 0;
    while(cnt < emergency.length){
        newEmergency.push({value: emergency[cnt], idx: cnt});
        cnt ++;
    }
    newEmergency.sort((a,b) => b.value - a.value);
    var answer = new Array(emergency.length);
    let cnt1 = 0;
    while(cnt1 < newEmergency.length){
        let item = newEmergency[cnt1];
        answer[item.idx] = cnt1 + 1;
        cnt1 ++;
    }
    return answer;
}