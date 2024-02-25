

export default function Result({res}) {
    return(
        <>
            <ul>
                {Object.entries(res).map(el => <li>{el[0]}: {el[1]}</li>)}
            </ul>
        </>
    )
}