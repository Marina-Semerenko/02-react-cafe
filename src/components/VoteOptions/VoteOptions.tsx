import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css'

export interface VoteOptionsProps {
    onLeaveFeedback: (voteType: VoteType) => void;
    onReset: () => void;
    total: boolean;
    
}

export default function VoteOptions ({ onLeaveFeedback, onReset, total }: VoteOptionsProps) {  
    return (
    <div className = { css.container } >
        <button className={css.button} onClick={() => onLeaveFeedback('good')}>Good</button>
        <button className={css.button} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button className={css.button} onClick={() => onLeaveFeedback('bad')}>Bad</button>
        {total  && (
              <button className={`${css.button} ${css.reset}`} onClick={onReset}>
                    Reset
                </button>
)};
</div>
    )

}
