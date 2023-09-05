import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

export interface BlogLinkProps {
  category: string,
  postinfo: {
    filename: string,
    title: string,
  }
}

export default function BlogLink (props: BlogLinkProps) {
  const {postinfo, category} = props;
  const {filename, title} = postinfo;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`/${category}/${filename}`}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
