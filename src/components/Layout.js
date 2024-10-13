import * as React from 'react';
import Navbar from './Navbar';

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <footer>
        <p>Built and Designed by Adiela Abishua &copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default Layout;
