import { useParams } from "react-router-dom";

function About(params) {
	const {id} = useParams()

	return <div>About Page {id ? id : ""}</div>;
 	}
	 
export default About