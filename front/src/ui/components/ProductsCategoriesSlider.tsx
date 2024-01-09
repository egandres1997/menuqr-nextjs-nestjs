'use client';

import 'keen-slider/keen-slider.min.css';

import { useGetProductsCategories } from '@/infra/queries/getProductsCategories.query';
import { Box, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { useKeenSlider } from 'keen-slider/react';
import { useMemo, useState } from 'react';

export type ProductsCategoriesSlider = {};

export default function ProductsCategoriesSlider({}: ProductsCategoriesSlider) {
  const [loaded, setLoaded] = useState(false);

  const theme = useTheme();

  const { productsCategories } = useGetProductsCategories();

  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const slidesPerView = useMemo(() => {
    if (isLg) return 6.4;
    if (isMd) return 5.4;
    if (isSm) return 5.4;

    return 3.4;
  }, [isLg, isMd, isSm]);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: 'snap',
    dragSpeed: 0.5,
    drag: productsCategories.length > Math.round(slidesPerView),
    slides: {
      perView: slidesPerView,
      spacing: 8,
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Container
      component="ul"
      sx={{
        padding: 0,
        marginY: 0,
        overflowX: 'scroll',
        display: 'flex',
        gap: 2,
        listStyleType: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {productsCategories.map((c) => (
        <Box component="li" key={c.category} className="keen-slider__slide">
          <Button
            component="a"
            href={`#${c.category}`}
            color="secondary"
            variant="outlined"
          >
            {c.category}
          </Button>
        </Box>
      ))}
    </Container>
  );
}
