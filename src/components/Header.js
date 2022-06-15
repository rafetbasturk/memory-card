import { GrScorecard } from "react-icons/gr";

function Header({ score, level }) {
  return (
    <header>
      <div className="logo">Memory Card</div>
      <div className="result">
        <GrScorecard className="icon" />
        <div>
          <div className="level">
            Level - {level}
          </div>
          <div className="score">
            Score - {score}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;