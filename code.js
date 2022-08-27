let finished = false;
for (let i = 0; i < 5 && !finished; i++) {
    for (let j = 0; j < 5; j++) {
        if (i * j > 6) {
            finished = true;
            break;
        }
        console.log(i, j)
    }
    console.log("++++++++++++++++++++++++++++++++++++++")
}