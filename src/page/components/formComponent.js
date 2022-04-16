import './formComponent.css'

const FormComponent =()=>{
    return(
        <div className="font-prompt" style={{paddingTop: "60px"}}>
            <form>
                <div>
                    <div style={{marginLeft: "6VW"}}>
                        <div>
                            <input className="searchBox" type="text" minlength="1" maxLength="1" inputmode="numeric" pattern="[0-9]"></input>
                            <input className="searchBox" type="text" minlength="1" maxLength="1" inputmode="numeric" pattern="[0-9]"></input>
                            <input className="searchBox" type="text" minlength="1" maxLength="1" inputmode="numeric" pattern="[0-9]"></input>
                            <input className="searchBox" type="text" minlength="1" maxLength="1" inputmode="numeric" pattern="[0-9]"></input>
                            <input className="searchBox" type="text" minlength="1" maxLength="1" inputmode="numeric" pattern="[0-9]"></input>
                            <input className="searchBox" type="text" minlength="1" maxLength="1" inputmode="numeric" pattern="[0-9]"></input>
                        </div>
                        <div className="submit_button">
                            <button className="font-extralight" type="submit">ค้นหา</button>
                        </div>
                        <div className="go_random_button">
                            <button type="go_random"><u>ไปยังระบบสุ่ม</u></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormComponent