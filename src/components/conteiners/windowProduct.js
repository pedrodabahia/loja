import styles from './windowProduct.module.css';
import React, {useContext} from 'react';
import CarrinhoContext from '../context/carrinhoContext';

function WindowProduct({photo,name, preco,marca,description,precoFalse,closed}){
	
	const {carrinho , setCarrinho} = useContext(CarrinhoContext);

	const click = (e) =>{

		e.preventDefault();
		setCarrinho([...carrinho, {"nome": name ,"quantidade" : e.target.quantidade.value > 0 ? e.target.quantidade.value : 1, "imagem" : photo, "imagem" : preco, "marca" : marca}]);
		console.log(carrinho)
	}


	return(
		<div className={styles.poupConteiner}>	
			<div className={styles.conteiner}>
			<div className={styles.image}>
				<img src={photo} />
			</div>
			<div className={styles.title}>
				<h1>{name} - {marca}</h1>
				<h2 className={styles.precoFalse}>{precoFalse}</h2>
				<h2>{preco}</h2>
				<h2>Descrição: <br/> {description}</h2>
			</div>
			<div className={styles.tableDesc}>
				<ul>
					<li><u>NOME:</u>  {name}</li>
					<li><u>MARCA:</u>  {marca}</li>
					<li><u>DESCRIÇÃO:</u>  {description}</li>
					<li><u>VALOR:</u> {preco} </li>
				</ul>
			</div>
			<div className={styles.comprar}>
				<form onSubmit={click}>
					<label>Quant:</label>
					<input type="number" placeholder="1" name="quantidade"/>
					<button type="submit">Adicionar ao carrinho</button>
				</form>
			</div>
			<span onClick={closed} className={styles.closed}>X</span>
			</div>
		</div>
		)
}
export default WindowProduct;