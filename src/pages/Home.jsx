import React from 'react';
import { Grid, Container, Paper, Typography } from '@mui/material';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Últimos Artículos
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} md={6} key={post.id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;