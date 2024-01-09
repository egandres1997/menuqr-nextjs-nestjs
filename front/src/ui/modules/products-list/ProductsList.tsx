'use client';

import {
  Card,
  Box,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  Grid,
} from '@mui/material';
import { useGetProducts } from '@/infra/queries/getProducts.query';
import ProductsCategoriesSlider from '@/ui/components/ProductsCategoriesSlider';
import { useMemo } from 'react';
import { Product } from '@/domain/model/product.model';
import { useGetProductsCategories } from '@/infra/queries/getProductsCategories.query';

export type ProductsList = {};

export default function ProductsList({}: ProductsList) {
  const { products } = useGetProducts();
  const { productsCategories } = useGetProductsCategories();

  const categorized = useMemo(() => {
    const categories: Record<string, Product[]> = {};
    productsCategories.forEach((c) => {
      if (!categories[c.category]) categories[c.category] = [];
    });
    products.forEach((p) => {
      categories[p.category].push(p);
    });
    return categories;
  }, [products, productsCategories]);

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.grey[50],
        paddingBottom: 6,
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: (theme) => theme.spacing(16),
          left: 0,
          paddingY: (theme) => theme.spacing(4),
          paddingX: (theme) => theme.spacing(2),
          background: (theme) => theme.palette.background.default,
          zIndex: 2,
          width: '100%',
        }}
      >
        <ProductsCategoriesSlider />
      </Box>
      <Container>
        {Object.keys(categorized).map((category) => (
          <Box
            id={category}
            key={category}
            sx={{ scrollMarginTop: (theme) => theme.spacing(32) }}
          >
            <Typography variant="subtitle1" sx={{ paddingY: 4 }}>
              {category}
            </Typography>
            <Grid container spacing={4}>
              {categorized[category].map((p) => (
                <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="150"
                      loading="lazy"
                      image="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
