import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Product from './Product';
import styles from './styles';


export default class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        image: 'https://assets.nike.com.br/ArquivoExibir/1711411.jpg',
        title: 'TÊNIS NIKE REACT ELEMENT 55 PREMIUM MASCULINO',
        description: 'O Nike React Element 55 é uma mistura equilibrada de design clássico e inovação voltada para o futuro. ',
        price: 'R$599,90',
      },
      {
        id: 2,
        image: 'https://www.usereserva.com/ccstore/v1/images/?source=/file/v6842691478368051637/products/0039813014_02.jpg',
        title: 'CAMISETA PICA-PAU ASTERISCO',
        description: 'Camisetas Reserva com estampas exclusivas da marca. ',
        price: 'R$129,00',
      },
      {
        id: 3,
        image: 'https://assets.nike.com.br/ArquivoExibir/970467.jpg',
        title: 'MOCHILA NIKE HAYWARD FUTURA 2.0',
        description: 'A Mochila Nike Sportswear Hayward Futura 2.0  apresenta um grande compartimento principal e costas em mesh acolchoadas.',
        price: 'R$199,90',
      },
      {
        id: 4,
        image: 'https://www.usereserva.com/ccstore/v1/images/?source=/file/v7115780806891554882/products/0037986014_02.jpg',
        title: 'CAMISETA SEXTOU',
        description: 'Camisetas Reserva com estampas exclusivas da marca. ',
        price: 'R$129,00',
      },
      {
        id: 5,
        image: 'https://assets.nike.com.br/ArquivoExibir/1711451.jpg',
        title: 'TÊNIS NIKE EPIC PHANTOM REACT FLYKNIT MASCULINO',
        description: 'O cabedal Flyknit com construção de alta precisão oferece um ajuste incrível sem cadarços.',
        price: 'R$699,90',
      },
      {
        id: 6,
        image: 'https://boticario.vteximg.com.br/arquivos/ids/194124-500-500/Malbec_Club_Locao_Hidratante_Desodorante_Corporal_250ml_73795_frontal.jpg',
        title: 'Malbec Club Loção Hidratante Desodorante Corporal 250ml',
        description: 'A Malbec Loção Hidratante Desodorante Corporal Club foi especialmente desenvolvida para a pele masculina.',
        price: 'R$39,90',
      },
      {
        id: 7,
        image: 'https://www.usereserva.com/ccstore/v1/images/?source=/file/v4110469249214847714/products/0045114040_02.jpg',
        title: 'CARTEIRA VANCOUVER RESERVA',
        description: 'Lain pop sky blueA carteira Vancouver é o acessório essencial para o seu dia a dia.',
        price: 'R$239,00',
      },
      {
        id: 8,
        image: 'https://boticario.vteximg.com.br/arquivos/ids/183279-500-500/28922-malbec-noir-fragrancia.jpg',
        title: 'Malbec Noir Desodorante Colônia 100ml',
        description: 'Combinando notas e acordes que criam uma fragrância misteriosa e sofisticada,Malbec Noir Desodorante Colônia foi feito para o homem moderno.',
        price: 'R$149,90',
      },
    ],
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.products.map(product =>
            <Product key={product.id} product={product}/>
        )}
      </View>
    )
  }
}
