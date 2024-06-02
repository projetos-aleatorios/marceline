export default (...string: (string | null)[]): string => {
    let x: string = '';

    for (let i of string) {
        if (!i) continue;
        x += i;
    }
    
    return x;
}