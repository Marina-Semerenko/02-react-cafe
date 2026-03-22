import css from './App.module.css'
import { useState } from 'react'
import CafeInfo from '../CafeInfo/CafeInfo'
import type { Votes, VoteType } from '../../types/votes'
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';


export default function App () {  
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0,}) 
  
  const handleVote = (type: VoteType): void => {
    setVotes((prev) => ({ ...prev, [type]: prev[type] + 1}));
  };
  const resetVotes = (): void => {
    setVotes({ good: 0, neutral: 0, bad: 0});
  };


  const totalFeedback = votes.good + votes.neutral + votes.bad;
  const positiveFeedback = totalFeedback ? Math.round((votes.good / totalFeedback) * 100) 
    : 0;

  return (
    <div  className = {css.app} >
      <CafeInfo/>

    <VoteOptions onLeaveFeedback={handleVote} onReset={resetVotes}  total={totalFeedback > 0} />
     {totalFeedback > 0 ? <VoteStats votes={votes} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> : <Notification/>}
     


      </div>
  );
};










































