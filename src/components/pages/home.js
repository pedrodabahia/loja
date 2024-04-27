import styles from './home.module.css';
import Card from '../conteiners/cards';

function Home({dados, status}){

	return(
		<div className={styles.home}>

   {status ? dados.map((produto) => <Card 
   	name={produto.name} 
   	marca={produto.brand} 
   	photo={produto.photo} 
   	preco={produto.price}
   	description={produto.description}
   	/>) : ''}

		</div>
		)
}
export default Home;