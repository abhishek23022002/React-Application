import { useNavigate } from "react-router-dom"


export default function DashBoard(params) {
	const navigate = useNavigate();
	function navigating(params) {
		navigate('/login')
	}

	return (
		<>
		<h1>Login in to your dashboard</h1>
		<button onClick={navigating}> Login</button>
		
		</>
	)
}