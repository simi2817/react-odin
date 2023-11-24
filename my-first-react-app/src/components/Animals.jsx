function Animals() {
    const animals = ['lion', 'deer', 'tiger'];

    return (
        <>
        <h2>Animals:</h2>
        {animals.map((animal) => {
            return <li key={animal}>{animal}</li>
        })}
        </>
    );
}

export default Animals;