function solution(n) {
    const getLcm = (a, b) => {
    let lcm = 1;
    while ((lcm % a !== 0 || lcm % b !== 0) && lcm < a * b) lcm += 1;
    return lcm;
  };
  return getLcm(n, 6) / 6;
}