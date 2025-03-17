import { ButtonHTMLAttributes } from "react"
import style from './button.module.css'


interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    textButton:string
    url:string
}


export const Btn = ({url,textButton,...props}:BtnProps) =>{
    return (
        <button className={style.btn} {...props}>
            {textButton}
            <img className={style.btnImg} src={url}  />
         </button>
    )
}