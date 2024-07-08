import { CORE_CONCEPTS } from "../Data";
import Coreconcept from "./Coreconcept";

function Concepts() {
  return (
    <>
      <h2>Time to get started!</h2>

      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptitem) => {
            return <Coreconcept {...conceptitem} />;
          })}
        </ul>
      </section>
    </>
  );
}


export default Concepts