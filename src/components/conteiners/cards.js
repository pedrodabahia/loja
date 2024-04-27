import styles from './cards.module.css';
import Window from 	'./windowProduct';
import { useState } from 'react';


function Card({marca, name, preco, photo,description}){

var value = parseFloat(preco)
var moeda = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
var valueFalse = value + 240;
var moedaFalse = valueFalse.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})



const [produtos, setProdutos] = useState([]);
const [windowActive , setActive] = useState(false);

const windowProduct = () => {
	setActive(true)
}
const windowClosed = () => {
	setActive(false)
}

return(
	<div className={styles.cardConteiner}>
	{windowActive ? (<Window closed={windowClosed} photo={photo} name={name} marca={marca} precoFalse={moedaFalse} preco={moeda}description={description}/>) : ''}
	<div className={styles.imagemCard}>
		<img src={photo} alt="imagem"/>
	</div>
	<h1>{name ? name : "TItulo do produto"} - {marca ? marca : "Marca"}</h1>
	<h2>{marca ? marca : "Marca"}</h2>
	<h2 className={styles.preco}>{preco ? moeda : "------"}</h2>
	<button type="button" onClick={windowProduct}>Comprar</button>
	
	</div>
)
}
export default Card;