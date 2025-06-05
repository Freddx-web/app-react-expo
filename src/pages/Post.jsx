import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Container, Typography, Chip } from '@mui/material';
import { posts } from '../data/posts';
import { getIcon } from '../utils/icons';

const Post = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));
  const PostIcon = getIcon(post.icon);

  if (!post) return <div>Post no encontrado</div>;

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {PostIcon && <PostIcon style={{ fontSize: '40px', marginRight: '15px' }} />}
        <Typography variant="h3">{post.title}</Typography>
      </div>
      <Typography color="textSecondary" gutterBottom>
        {post.date} • <Chip label={post.category} size="medium" />
      </Typography>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </Container>
  );
};

export default Post;