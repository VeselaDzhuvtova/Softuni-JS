function specialNumber(input) {
    let n = input[0];
    let index = ""
    for (let i = 1111; i < 10000; i += 1) {
        tex = String(i)
        for (let j = 0; j < tex.length; j += 1) {
            if (n % Number(tex[j]) === 0) {
                if (n % Number(tex[j + 1]) === 0) {
                    if (n % Number(tex[j + 2]) === 0) {
                        if (n % Number(tex[j + 3]) === 0) {
                            index += i + j + " ";
                        }
                    }
                }
            }
        }
    }
    console.log(index);
}