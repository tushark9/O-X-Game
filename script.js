let boxes = document.querySelectorAll(".btn");
let newBtn = document.querySelector(".btn2");
let msgContainer = document.querySelector(".winner");
let msg = document.querySelector("#msg");

// TURN
let turnO = true;

// WIN PATTERN
const WinPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
    } else {
      box.innerText = "X";
    }
    turnO = !turnO;
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (const pattern of WinPatterns) {
    const [a, b, c] = pattern;
    const pos1Val = boxes[a].innerText;
    const pos2Val = boxes[b].innerText;
    const pos3Val = boxes[c].innerText;

    if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
      showWinner(pos1Val);
      return;
    }
  }

  // Check for draw
  const isDraw = [...boxes].every((box) => box.innerText !== "");
  if (isDraw) {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
  }
};

newBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msgContainer.classList.add("hide");
  turnO = true;
});
