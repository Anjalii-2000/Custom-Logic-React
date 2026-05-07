import React, { useState } from 'react'

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("typing in field:", name)
        console.log("current value:", value)

        setForm((prev) => {
            const updated = { ...prev, [name]: value }
            console.log("updated form state:", updated)
            return updated
        })
    }

    const validate = () => {
        let valid = true
        let newError = { email: "", password: "" }

        console.log("validating form...", form)

        if (!form.email) {
            newError.email = "Email required"
            console.log("email missing")
            valid = false
        } else if (!form.email.includes("@")) {
            newError.email = "Invalid email"
            console.log("email invalid format")
            valid = false
        } else {
            console.log("email looks good")
        }

        if (!form.password) {
            newError.password = "Password required"
            console.log("password missing")
            valid = false
        } else if (form.password.length < 6) {
            newError.password = "Password too short"
            console.log("password too short")
            valid = false
        } else {
            console.log("password looks good")
        }

        console.log("validation result:", valid)
        setError(newError)
        console.log("error state set:", newError)

        return valid
    }

    const handleClick = () => {
        console.log("button clicked")
        console.log("form before validation:", form)

        const isValid = validate()

        if (isValid) {
            console.log("form is valid, submitting...")
            console.log("final data:", form)

            setForm({
                email: "",
                password: ""
            })

            console.log("form reset done")
        } else {
            console.log("form has errors, not submitting")
        }
    }

    return (
        <div>
            <h2>Signup Form</h2>

            <input
                type="text"
                placeholder="Enter Email"
                value={form.email}
                name="email"
                onChange={handleChange}
            />
            <p>{error.email}</p>

            <input
                type="password"
                placeholder="Enter Password"
                value={form.password}
                name="password"
                onChange={handleChange}
            />
            <p>{error.password}</p>

            <button
                type="button"
                onClick={handleClick}
            >
                Signup
            </button>
        </div>
    )
}

export default Login