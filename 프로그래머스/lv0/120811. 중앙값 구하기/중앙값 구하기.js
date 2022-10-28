function solution(array) {
    //정렬코드. sort등 기능을 거의 쓰지 않고 처음부터 푸는연습
    let arrayCnt = 0;
    let newArray = [];
    while(arrayCnt < array.length){
        let minNumber = 1000;
        let cnt = 0;
        while(cnt < array.length){
            if(minNumber > array[cnt]){
                minNumber = array[cnt];
            }
            cnt = cnt + 1;
        }
        newArray.push(minNumber);
    
        let cnt2 = 0;
        while(cnt2 < array.length){
            if(minNumber === array[cnt2]){
                array[cnt2] = 1000;
                break;
            }
            cnt2 = cnt2 + 1;
        }
        arrayCnt = arrayCnt + 1;
    }
    return newArray[Math.floor(array.length/2)];
//정렬은 끝났으니, 가운데 값 꺼내는 방법
//array[Math.floor(n/2)] 소수점 날림    
}
//return array.sort((a,b) => a - b)[Math.floor(array.length / 2)];