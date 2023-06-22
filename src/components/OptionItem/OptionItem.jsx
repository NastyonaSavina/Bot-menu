
export const OptionItem = ({item}) => {
    
    return(
        
        <label>
            <input type="checkbox" value={item} />
            {item}
        </label>
       
    )
};