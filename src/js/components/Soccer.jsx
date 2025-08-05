import React from 'react';

const Soccer = ({team1Prop, team2Prop, team3Prop}) => {
    return (
        <div>
           <div class="form-check">
            <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
            <label class="form-check-label" for="radioDefault1">
             {team1Prop}
             </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDefault" id="checkChecked" checked />
  <label class="form-check-label" for="checkChecked">
  {team2Prop}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault3" checked />
  <label class="form-check-label" for="checkChecked">
  {team3Prop}
  </label>
</div>
        </div>
    )
}

export default Soccer