import React from 'react'
import { IconBug } from '@tabler/icons-react';

const Error = () => {
	return (
		<>
			<main>
				<div className="container-fluid py-2">
					<div className="card gradiente wow bounceIn">
						<div className="error">
							<IconBug color="black" size={60}></IconBug>
							404 Opss...
							<IconBug color="black" size={60}></IconBug>
						</div>
					</div>
					<div className="card gradiente wow bounceInRight">
						<h2>
							Lo sentimos esta receta no salió bien.
						</h2>
						<div className="container-img contenedor">
							<img src="../../img/404.jpg" alt="Logo de Foodier se presenta una tabla para picar comida y un cuchillo de cocina." />
						</div>
					</div>
				</div>
				<div>
				</div>
			</main>
		</>
	)
}
export default Error