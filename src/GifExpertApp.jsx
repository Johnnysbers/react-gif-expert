import { useState } from 'react'
import { AddCaterogy, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const addOnCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // categories.push('Valorant'); No utilizar push para añadir elementos a un array
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Valorant']); Otra forma de hacerlo
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCaterogy
                onNewCategory={value => addOnCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
