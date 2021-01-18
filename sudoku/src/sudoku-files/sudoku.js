import "./sudoku.css";
import solution from "./solution.png";
import { checktable, gameCheck } from "./gameEvaluator";

function Sudoku() {

    function processKeyPress(event) {
        console.log(event.key);
        let cell = document.querySelector(".selected-cell")
        if (cell !== null) {
            for (let i = 1; i <= 10; i++) {
                if (cell.classList.contains("number-" + i)) {
                    cell.classList.remove("number-" + i)
                }
            }
            if (event.key in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] && event.key !== 0) {
                (cell.classList.add("number-" + event.key))
                let coord = cell.id[5] + cell.id[6];
                let number = document.querySelector('#number-' + coord);
                number.textContent = `${event.key}`
            }
        }
    }

    window.addEventListener("keydown", processKeyPress, false);

    return (
        <div className="center">
            <hr />
            <table className="sudoku-table center">
                <Table />
            </table>
            <hr />
            <div className="center" >
                <h1>Check if correct: </h1>
                <button onClick={() => checktable()}>Check</button>
                <h2 id="evaluation">Check!</h2>
            </div>
            <hr />
            <img className="image center" src={solution} alt="Solution" />
        </div >
    );
}



const Table = () => {
    let hint = {
        "00": 5,
        "01": 3,
        "04": 7,
        "10": 6,
        "13": 1,
        "14": 9,
        "15": 5,
        "21": 9,
        "22": 8,
        "27": 6,
        "30": 8,
        "34": 6,
        "38": 3,
        "40": 4,
        "43": 8,
        "45": 3,
        "48": 1,
        "50": 7,
        "54": 2,
        "58": 6,
        "61": 6,
        "66": 2,
        "67": 8,
        "73": 4,
        "74": 1,
        "75": 9,
        "78": 5,
        "84": 8,
        "87": 7,
        "88": 9
    }
    let Table = [];
    let Row = [];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let coord = i.toString() + j.toString();
            if (coord in hint) {
                Row.push(<Cell row={i} column={j} value={hint[coord]} />)
            } else {
                Row.push(<Cell row={i} column={j} value={""} />)
            }

        }
        Table.push(<tr>{Row}</tr>);
        Row = [];
    }
    return (
        <tbody>
            {Table}
        </tbody >

    )
}

const Cell = (coordonates) => {
    let cell = "cell-" + coordonates.row + coordonates.column;
    let number = "number-" + coordonates.row + coordonates.column;
    return (
        <th>
            <svg width="40" height="40">
                <rect
                    onMouseOver={(e) => { e.target.classList.toggle("highlighted") }}
                    onMouseLeave={(e) => { e.target.classList.toggle("highlighted") }}
                    onClick={(e) => {
                        let prev = document.querySelector(".selected-cell")
                        if (prev !== null) {
                            prev.classList.remove("selected-cell");
                        }
                        e.target.classList.toggle("selected-cell")
                    }}
                    id={cell} width="40" height="40" className="box-cell" />
                <text x="10" y="30" fill="black" id={number} className="number" >{coordonates.value}</text>
            </svg>
        </th>
    )

}

export default Sudoku;


