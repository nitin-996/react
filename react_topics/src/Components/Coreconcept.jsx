



export default function Coreconcept({title,description,image}){
  return(
    <li>
    <img src={image} alt={title}/>
    <h1>{title}</h1>
    <p>{description}</p>
    </li>
  )
}

 