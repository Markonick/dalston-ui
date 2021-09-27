
import dalston1  from '../../assets/images/dalston1.jpeg';
import dalston2  from '../../assets/images/dalston2.jpeg';
import dalston3  from '../../assets/images/dalston3.jpeg';
import dalston4  from '../../assets/images/dalston4.jpeg';
import dalston5  from '../../assets/images/dalston5.jpeg';
import dalston6  from '../../assets/images/dalston6.jpeg';
import dalston7  from '../../assets/images/dalston7.jpeg';
import dalston8  from '../../assets/images/dalston8.jpeg';
import dalston9  from '../../assets/images/dalston9.jpeg';
import dalston10 from '../../assets/images/dalston10.jpeg';
import dalston11 from '../../assets/images/dalston11.jpeg';
import dalston12 from '../../assets/images/dalston12.jpeg';
import dalston13 from '../../assets/images/dalston13.jpeg';
import dalston14 from '../../assets/images/dalston14.jpeg';
import dalston15 from '../../assets/images/dalston15.jpeg';
import dalston16 from '../../assets/images/dalston16.jpeg';
import dalston17 from '../../assets/images/dalston17.jpeg';
import dalston18 from '../../assets/images/dalston18.jpeg';
import dalston19 from '../../assets/images/dalston19.jpeg';
import dalston20 from '../../assets/images/dalston20.jpeg';
import dalston21 from '../../assets/images/dalston21.jpeg';
import dalston22 from '../../assets/images/dalston22.jpeg';
import dalston23 from '../../assets/images/dalston23.jpeg';
import dalston24 from '../../assets/images/dalston24.jpeg';
import dalston25 from '../../assets/images/dalston25.jpeg';

const images = [
    dalston1 ,
    dalston2 ,
    dalston3 ,
    dalston4 ,
    dalston5 ,
    dalston6 ,
    dalston7 ,
    dalston8 ,
    dalston9 ,
    dalston10,
    dalston11,
    dalston12,
    dalston13,
    dalston14,
    dalston15,
    dalston16,
    dalston17,
    dalston18,
    dalston19,
    dalston20,
    dalston21,
    dalston22,
    dalston23,
    dalston24,
    dalston25
]

const categories = new Map<number, string>(
  [
    [1, 'women'],
    [2, 'men'],
    [3, 'shoes'],
    [4, 'bags'],
    [5, 'accessories']
  ]
);

const productData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((i) => {
  const randInt = (max: number) => Math.floor(Math.random() * max);
  return {
    id: i,
    brand: 'Weekday',
    name: 'Cotton & Lace Top Floral Dress',
    description: 'Pretty cotton & lace top dress with animal and floral prints',
    price: 45,
    size: 9,
    category:  categories.get(randInt(categories.size) + 1),
    quantity: 1,
    condition: "Good condition",
    material: 'Cotton/Polyester',
    images: [1,2,3,4].map((k) => {
      return {
        id: k+10,
        src: images[i-1]}
    }), 
  };
});

productData[2].quantity = 0;
productData[6].quantity = 0;
productData[4].quantity = 3;

export default productData;
