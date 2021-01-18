export function checktable() {
    let table = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let location = "number-" + i.toString() + j.toString();
            let cell = document.getElementById(location);
            if (cell.textContent === null) {
                table[i][j] = 0;
            } else {
                table[i][j] = cell.textContent;
            }
        }
    }

    if (gameCheck(table)) {
        let ev = document.getElementById("evaluation");
        ev.textContent = "Correct!";
    } else {
        let ev = document.getElementById("evaluation");
        ev.textContent = "Wrong! Try again.";
    }
}

export function gameCheck(matrix) {
    let fv = [];
    for (let i = 1; i <= 9; i++)
        fv[i] = 0;
    // submatrix check:
    let ii = 0, jj = 0, sN = 2, sM = 2;
    while (sN <= 9) {
        jj = 0;
        sM = 2;
        while (sM <= 9) {
            for (let i = ii; i <= sN; i++) {
                for (let j = jj; j <= sM; j++) {
                    console.log(matrix[i][j])
                    if (fv[matrix[i][j]] == 0) {
                        fv[matrix[i][j]] = 1;
                    } else {
                        return i, j, false;
                    }
                }
            }
            for (let i = 1; i <= 9; i++)
                fv[i] = 0;
            jj += 3;
            sM += 3;
        }
        ii += 3;
        sN += 3;
    }
    // lines and columns ckeck:
    for (let i = 1; i <= 9; i++)
        fv[i] = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (fv[matrix[i][j]] == 0) {
                fv[matrix[i][j]] = 1;
            } else {
                console.log('check 2: ' + matrix[i]);
                return false;
            }
        }
        for (let i = 1; i <= 9; i++)
            fv[i] = 0;
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (fv[matrix[j][i]] == 0) {
                fv[matrix[j][i]] = 1;
            } else {
                console.log('check 3: ' + matrix[i]);
                return false;
            }
        }
        for (let i = 1; i <= 9; i++)
            fv[i] = 0;
    }
    return true;
}