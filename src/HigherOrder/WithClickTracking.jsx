

const WithClickTracking = (Comp) => {
  return (props)=>{
    const handleClick =()=>{
          console.log("click track" , props.tarckinginfo)
    };
    return (
             <div onClick={handleClick}>
                <Comp  {...props} />
             </div>
    );
  }
}

export default WithClickTracking
