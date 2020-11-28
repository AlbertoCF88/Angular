export class Shop {
 
    shopItems: object;
  static Model: any;
    
   constructor() {
    this.shopItems = [
      {
      title: 'Curso Wordpress',
      desc: 'Aprende Wordpress desde 0 con David Piqué',
      picture: 'assets/IMG/wordpress.jpg',
      price: 164
      },
      {
      title: 'Curso Frontend',
      desc: 'Aprende desarrollo front end desde 0 con David Piqué',
      picture: 'assets/IMG/frontend.jpg',
      price: 220
      },
      {
      title: 'Curso Fullstack',
      desc: 'Aprende desarrollo frontend y backend desde 0 con David Piqué',
      picture: 'assets/IMG/fullstack.jpg',
      price: 420
      }
    ];
   }
   }