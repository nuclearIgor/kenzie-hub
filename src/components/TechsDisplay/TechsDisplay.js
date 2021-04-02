import styles from './TechsDisplay.module.css'

export const TechsDisplay = ({techs}) => {

    return(
        <div className={styles.techsContainer}>
        {!!techs && techs.length > 0 ?
        (
         <>
               {techs.map((item, index) =>
                       <div key={index} className={styles.tech}>
                   <p>Tech: {item.title}</p>
                   <p>Nível: {item.status}</p>
                   <p>Criado em: {item.created_at}</p>
                   <p>Atualizado em: {item.updated_at}</p>
                       </div>
               )}
         </>


        ) : (
            <>
            <p>não tem</p>
            </>
        )}
        </div>
    )
}