const Inputpack=(props)=> {
    const{label,onChange,id,...inputProps}=props;
  return (
    <div class="flex justify-between my-3 mx-2">
            
            <h5 class="pl-2 p-2 ">{label}</h5>
            <input {...inputProps} onChange={onChange} class="pl-2 p-2 rounded-md w-[60px] text-center" maxLength={2} type="text"pattern="[0-9]{2}"required/>
            

    </div>
  )
}

export default Inputpack;