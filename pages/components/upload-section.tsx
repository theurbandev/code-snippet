const UploadSection = () => {

  const upload = () => {
    alert("Upload Clicked");
  };

  return (
    <div className="grid content-center" style={{ height: "100%" }}>
      <button onClick={upload}>
        <h1 className="">Upload ugly screenshot</h1>
      </button>
    </div>
  );
  
};

export default UploadSection;
