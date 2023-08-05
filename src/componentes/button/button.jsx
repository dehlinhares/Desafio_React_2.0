function ButtonB({Text, onClick, Type = "Button" }) {
    return (
      <button className="content-button" type={Type} onClick={onClick} Text={Text}>
        CLIQUE ME
      </button>
    );
  }
  
  export default button;