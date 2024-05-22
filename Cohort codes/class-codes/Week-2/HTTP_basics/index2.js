const express = require("express");
const app = express();

let n = 10;
function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

app.get("/", (req, res) => {
    const queryN = req.query.n;
    if (queryN) {
        const n = parseInt(queryN);
        if (!isNaN(n)) {
            const ans = sum(n);
            res.send(`hi your ans is ${ans}`);
        } else {
            res.send("Invalid 'n' value provided.");
        }
    } else {
        res.send("'n' query parameter is missing.");
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

//?n is denoting query parameter
// if i write localhost:3000/?n=10 the output would be "hi your ans is 55"