export const ViewButton = () => {
    return (
      <button className="button" style={buttonStyles}>
        View
      </button>
    );
  };
  
export const EditButton = () => {
   return (
      <button className="button" style={buttonStyles}>
        Edit
      </button>
   );
};

export const AddButton = () => {
    return (
       <button className="button" style={buttonStyles}>
         Add 
       </button>
    );
};


const buttonStyles= {
        padding: '15px 25px',
        border: 'none',
        backgroundColor: '#003366',
        color: 'white',
        margin: '5px',
        borderRadius: '5px'
}
