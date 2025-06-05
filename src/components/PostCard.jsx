import React from 'react';
import { Card, CardContent, Typography, Chip, Icon } from '@mui/material';
import { getIcon } from '../utils/icons';

const PostCard = ({ post }) => {
  const PostIcon = getIcon(post.icon);
  
  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          {PostIcon && <PostIcon style={{ marginRight: '10px' }} />}
          <Typography variant="h5" component="h2">
            {post.title}
          </Typography>
        </div>
        <Typography color="textSecondary" gutterBottom>
          {post.date} • <Chip label={post.category} size="small" />
        </Typography>
        <Typography variant="body2" component="p">
          {post.excerpt}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;