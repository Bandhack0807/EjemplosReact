function Expresiones(){
    const nombre = 'Victor Manuel';
    const apellidos = 'Hdez Hdez';
    return(
        <div>
            <h2>Expresiones</h2>
            <h3>Tu Nombre Es:{nombre} Y Tus Apellidos Son:{apellidos}</h3>
            <Lista />
        </div>
    )
}

function Lista(){
    const users = [
        {id: 1, name: 'MichBand', role: 'Web Developer'},
        {id: 2, name: 'Samuel', role: 'Web Designer'},
        {id: 3, name: 'Osmar', role: 'Team Leader'},
    ]
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Role</th>
                    </tr>
                    {
                        users.map(function(users, index){
                            return (
                                <tr key={index}>
                                    <td>{users.name}</td>
                                    <td>{users.role}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Expresiones