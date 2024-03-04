import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BlogLink, {BlogLinkProps} from './BlogLink'

const sidebar = {
  title: 'About',
  description:
    'This is a personal page for recording notes and awesome blogs',
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: "https://github.com/umdetree" },
    { name: 'Twitter', icon: TwitterIcon, url: "#"},
    { name: 'Facebook', icon: FacebookIcon, url: "#"},
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

interface PageProps {
  header: string,
  bloglinks: ReadonlyArray<BlogLinkProps>,
}

export default function Page(props: PageProps) {
  const {header, bloglinks} = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={header}/>
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          {bloglinks.map((bl) => (
            <BlogLink {...bl}/>
          ))}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
