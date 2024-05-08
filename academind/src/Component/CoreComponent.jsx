export default function coreConcept({Title , description , image}){
    return (
      <li>
        <img src={image} alt='..'/>
        <h3>{Title}</h3>
        <p>{description}</p>
      </li>
    )
  }