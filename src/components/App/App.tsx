import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { useState } from "react";
import type { VoteType, Votes } from "../../types/votes";

const App = () => {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  const handleVote = (type: VoteType) => {
    setVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };
  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
};

export default App;
