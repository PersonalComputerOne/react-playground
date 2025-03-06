export default function Slots() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const num3 = Math.floor(Math.random() * 3) + 1;
  const isWinner = num1 === num2 && num1 === num3;
  return (
    <div>
      <h1>
        {num1} {num2} {num3}
      </h1>
      <h2 style={{ color: isWinner ? "green" : "red" }}>
        {isWinner ? "You win!" : "You lose"}
      </h2>
      {isWinner && <h3>Congrats</h3>}
    </div>
  );
}
