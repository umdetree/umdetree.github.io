import React, { useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import {useParams} from 'react-router-dom';
import Container from '@mui/material/Container';
import Markdown from './Markdown';
import Header from './Header'

interface BlogPostInterface {
  category: string;
}

export default function BlogPost(props: BlogPostInterface) {
  const {category} = props;
  const {filename} = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const res = await fetch(`/blog/${category}/${filename}`);
        const text = await res.text();
        setContent(text);
      } catch (e) {
        console.error(e);
      }
    };

    fetchBlogContent();
  }, [category, filename]);

  return (
    <Container maxWidth="lg">
      <Header title={category}/>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          '& .markdown': {
            py: 3,
          },
        }}
      >
        <Markdown className="markdown" key={content.substring(0, 40)}>
          {content}
        </Markdown>
      </Grid>
    </Container>
  )
};
