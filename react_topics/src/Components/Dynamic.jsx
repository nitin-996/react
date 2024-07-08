import { EXAMPLES } from "../Data";
import { useState } from "react";
import {Button} from "./Button"

function Dynamic(){

    const [descrip, setdescrip] = useState();

  function handleClick(selected) {
    return setdescrip(selected);
  }
    return(<>
    <section id="examples">
          <h2>Examples</h2>
          <menu>
            <Button
              isSelected={descrip == "components"}
              onSelect={() => {
                handleClick("components");
              }}
            >
              components
            </Button>
            <Button
              isSelected={descrip == "props"}
              onSelect={() => {
                handleClick("props");
              }}
            >
              props
            </Button>
            <Button
              isSelected={descrip == "jsx"}
              onSelect={() => {
                handleClick("jsx");
              }}
            >
              jsx
            </Button>
            <Button
              isSelected={descrip == "state"}
              onSelect={() => {
                handleClick("state");
              }}
            >
              state
            </Button>
          </menu>

          <h2>Dynamic change</h2>

          {/* conditional rendenring */}
          {!descrip ? <p>please click on button</p> : null}
          {descrip && (
            <div id="tab-content">
              <h3>{EXAMPLES[descrip].title}</h3>
              <p>{EXAMPLES[descrip].description}</p>
              <pre>
                <code>{EXAMPLES[descrip].code}</code>
              </pre>
            </div>
          )}
        </section>
    </>)
}

export default Dynamic