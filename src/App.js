import 'regenerator-runtime/runtime'
import React from 'react'
import './global.css'


export default function App() {

    const onHello = async (event) => {
        event.preventDefault()
        const {name} = event.target.elements
        const newName = name.value

        try {
            const response = await window.contract.hello({
                name: newName
            })
            alert(response)
        } catch (e) {
            alert('Something went wrong!')
        }
    }

    return (
        <>
            <main>
                <form onSubmit={onHello}>
                    <fieldset id="fieldset">
                        <label
                            htmlFor="name"
                            style={{
                                display: 'block',
                                color: 'var(--gray)',
                                marginBottom: '0.5em'
                            }}
                        >
                            Enter your name
                        </label>
                        <div style={{display: 'flex'}}>
                            <input
                                autoComplete="off"
                                id="name"
                                style={{flex: 1}}
                            />
                            <button
                                style={{borderRadius: '0 5px 5px 0'}}
                            >
                                Submit
                            </button>
                        </div>
                    </fieldset>
                </form>
            </main>
        </>
    )
}
