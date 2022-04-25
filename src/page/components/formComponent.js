import './formComponent.css'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import ResultForNum from './resultForNumAPI'

const FormComponent =(props)=>{
    const li_str_num = ["0","1","2","3","4","5","6","7","8","9"]
    const [val_index_1, setIndexVal_1] = useState('')
    const [val_index_2, setIndexVal_2] = useState('')
    const [val_index_3, setIndexVal_3] = useState('')
    const [val_index_4, setIndexVal_4] = useState('')
    const [val_index_5, setIndexVal_5] = useState('')
    const [val_index_6, setIndexVal_6] = useState('')
    const resultFor = useContext(ResultForNum)

    const autoTab = (fieldID, fieldLen, nextFieldID) =>{
        if (document.getElementById(fieldID).value.length === fieldLen) {
            document.getElementById(nextFieldID).focus();
        }
    }

    const autoBackTab = (fieldID, previousFieldID) =>{
        if (document.getElementById(fieldID).value.length === 0) {
            document.getElementById(previousFieldID).focus();
        }
    }

    const checkNum = (val) =>{
        // let temp = false
        let result_return = ''
        for (let i = 0; i<10; i++){
            if(val === li_str_num[i]){
                // temp = true
                result_return = i.toString()
            }
        }
        return result_return
    }

    const updateInputIndex_1 = (event)=>{
        setIndexVal_1(checkNum(event.target.value))
        autoTab("f1",1,"f2")
    }
    const updateInputIndex_2 = (event)=>{
        setIndexVal_2(checkNum(event.target.value))
        autoTab("f2",1,"f3")
        autoBackTab("f2","f1")
    }
    const updateInputIndex_3 = (event)=>{
        setIndexVal_3(checkNum(event.target.value))
        autoTab("f3",1,"f4")
        autoBackTab("f3","f2")
    }
    const updateInputIndex_4 = (event)=>{
        setIndexVal_4(checkNum(event.target.value))
        autoTab("f4",1,"f5")
        autoBackTab("f4","f3")
    }
    const updateInputIndex_5 = (event)=>{
        setIndexVal_5(checkNum(event.target.value))
        autoTab("f5",1,"f6")
        autoBackTab("f5","f4")
    }
    const updateInputIndex_6 = (event)=>{
        setIndexVal_6(checkNum(event.target.value))
        autoBackTab("f6","f5")
    }
    const saveInputItem = (event)=>{
        event.preventDefault()
        let temp = [val_index_1,val_index_2,val_index_3,val_index_4,val_index_5,val_index_6]

        for(let i = 0; i<6; i++){
            if (temp[i] === ''){
                temp[i] = "x"
            }
        }
        const temp_data_2 = temp.join('')
        const inputItemData = {
            number: temp_data_2
        }
        console.log("formC inputItemData: ",inputItemData)
        props.search_num(inputItemData)
        // console.log(resultFor)
        setIndexVal_1('')
        setIndexVal_2('')
        setIndexVal_3('')
        setIndexVal_4('')
        setIndexVal_5('')
        setIndexVal_6('')
    }

    // const [buttonFormState, setFormValid] = useState(false)
    // useEffect(()=>{
    //     const checkData = title.trim().length>0 && amount!==0
    //     setFormValid(checkData)
    // },[title,amount])

    return(
        <div className="font-prompt" style={{paddingTop: "60px"}}>
            <form onSubmit={saveInputItem}>
                <div>
                    <div style={{marginLeft: "6VW", marginRight: "6VW"}}>
                        <div>
                            <input className="searchBox" key="f01" id="f1" type="text" minlength="0" maxLength="1" onChange={updateInputIndex_1} value={val_index_1}></input>
                            <input className="searchBox" key="f02" id="f2" type="text" minlength="0" maxLength="1" onChange={updateInputIndex_2} value={val_index_2}></input>
                            <input className="searchBox" key="f03" id="f3" type="text" minlength="0" maxLength="1" onChange={updateInputIndex_3} value={val_index_3}></input>
                            <input className="searchBox" key="f04" id="f4" type="text" minlength="0" maxLength="1" onChange={updateInputIndex_4} value={val_index_4}></input>
                            <input className="searchBox" key="f05" id="f5" type="text" minlength="0" maxLength="1" onChange={updateInputIndex_5} value={val_index_5}></input>
                            <input className="searchBox" key="f06" id="f6" type="text" minlength="0" maxLength="1" onChange={updateInputIndex_6} value={val_index_6}></input>
                        </div>
                        <div className="submit_button">
                            <button className="font-extralight" type="submit">ค้นหา</button>
                        </div>
                        <div className="go_random_button">
                            <button type="go_random"><u>ไปยังระบบสุ่ม</u></button>
                        </div>
                        <div className="result_for">
                            <p>ผลการค้นหาของหมายเลข: {resultFor}</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormComponent