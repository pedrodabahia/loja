import styles from './navbar.module.css';
import carrinhoImg from '../../imagens/carrinho-de-compras.png';
import React,{useContext} from 'react';
import CarrinhoContext from '../context/carrinhoContext';

function Navbar (){

	const {carrinho} = useContext(CarrinhoContext)

	return(
		<nav>
		<div className={styles.title}>
			<h1>MKS STORE</h1>
		</div>

		<div className={styles.carConteiner}>
			<span>{carrinho.length}</span>
			<div className={styles.carr}>
				<img src={carrinhoImg} />
			</div>
		</div>	
		</nav>)
}
export default Navbar;