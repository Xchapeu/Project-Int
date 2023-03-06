import { Student } from "../Student";

export const List = () => {

    const list = [
        "Thais Galante", 
        "Jakeline Alves", 
        "Adriano Caversan", 
        "Estanislau da Fonseca", 
        "Anderson Rodrigo", 
        "Garbo Ganadjian",
    ]

    return (
        <ul>
            {
                list.map(student => {
                    return <Student>{student}</Student>
                })
            }
        </ul>
    );
}