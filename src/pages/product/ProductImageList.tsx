import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@mui/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ROUTES_CONFIG } from '../../routes';
import { IProduct}  from '../../customTypes';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: '10%',
      marginLeft: '13%',
      width: '75%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: 'white',
    },
    imageList: {
      width: '70%',
    },
    img:{
      transition: '1s',
    },
    textOnImage:{
      color: 'black',
    },
    container: {
      position: 'relative',
      "&:hover": {
        color: 'black',
        '& $overlay':{
          opacity: 1,
          transition: "0.7s",
      width: '99%',
        },
        '& $img':{
          opacity: 0.2,
          transition: "0.7s",
        },
        '& $textOnImage':{
          opacity: 1,
        }
      },
    },
    overlay: {
      width: '99%',
      height: 100,
      position: 'absolute',
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.1)',
      transition: '.5s ease',
      opacity:0,
      fontStyle: 'normal',
      fontWeight: 100,
      textAlign: 'center',
      fontFamily: "Quicksand",
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.34)',
    },
    soldout: {
      position: 'absolute' ,
      top: 10,
      left: 10,
      transition: '.5s ease',
      opacity: 0.8,
      fontStyle: 'normal',
      fontWeight: 100,
      fontSize: 14,
      color: 'deeppink',
      padding: '0px',
      textAlign: 'left',
      fontFamily: "Quicksand",
    }
  }),
);

type Props = {
  products: IProduct[],
};

const COLS = 3;

export const ProductImageList: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight * window.innerWidth/window.innerHeight / COLS]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const rowHeight = 0.9*size[1];
  const rowWidth = 0.9 * size[0] / 3.7;
  console.log(props.products[0])
  return (
    <div className={classes.root}>
      <ImageList rowHeight={rowHeight} cols={COLS} className={classes.imageList} style={{width: COLS*size[0]}}>
        {props.products.map((item: IProduct) => (
          <ImageListItem key={item.id}>
            <Link to={{
              pathname: ROUTES_CONFIG.PRODUCT_DETAIL,
              state: item
            }}>
              <div className={classes.container}>
                <img src={item.images.length > 0 ? item.images[0].url : ""} alt={item.description} className={classes.img} style={{height: rowHeight-10, width: rowWidth}}/>
                <div className={classes.overlay}>
                  <p className={classes.textOnImage} style={{color: 'deeppink'}}>
                    {item.brand}
                  </p>
                  <div className={classes.textOnImage} style={{wordWrap: 'break-word'}}>
                    {item.name}
                  </div>
                  <p className={classes.textOnImage}>
                    EU {item.size}<br />
                  </p>
                  <p className={classes.textOnImage}>
                    € {item.price}
                  </p>
                </div>
                <p className={classes.soldout}>
                  {item.quantity === 0 ? 'SOLD OUT' : ''}
                </p>
              </div>
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}