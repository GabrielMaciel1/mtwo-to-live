export interface Property {
    id: string;
    imovelType: string;
    preco: number;
    tipo: string;
    titulo: string;
    endereco: {
      bairro: string;
      cidade: string;
    };
  }
  
  export interface CardProps {
    data: Property;
  }
  