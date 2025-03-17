import { ImgHTMLAttributes } from "react"
import style from './header.module.css'
type ImageProps = ImgHTMLAttributes<HTMLImageElement>




export const Header = ({...props}:ImageProps) => {
    return(
        <>
            <header className={style.header}>
                <img {...props}/>
            </header>
        </> 
    
    )
       
}
    
