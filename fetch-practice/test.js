const { error } = require("node:console")

async function loadTodos() {
    try {
        const response = await fetch("http://localhost:3000/todos")
        if (!response.ok){
            throw new Error(`URL มันผิดครับพี่ ${response.status}`)
        }
        const actualData = await response.json()
        console.log(actualData)
    }
    catch (err) {
        console.error("พังจ้า", err.message)
    }
}

loadTodos()