const Footer = () => {
  return (
    <footer style={{ padding: "20px", textAlign: "center", borderTop: "1px solid #ddd", marginTop: "20px" }}>
      <p>© {new Date().getFullYear()} Моє Портфоліо</p>
      <div>
         
        <a 
          href="https://github.com/kn24-yeriabokin-del" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Мій GitHub профіль
        </a>
      </div>
    </footer>
  );
};

export default Footer;