import PropTypes from "prop-types"

export default function Inputform({ userInput, setUserInput }) {
    const { reminderText, dueDate } = userInput

    return (
        <form>
            <input value={reminderText} id="reminderText" type="text" placeholder="what do you want to do" />
            <input value={dueDate} id="dueDate" type="Date" />
            <button >submit</button>
        </form>
    )
}


Inputform.protoType = {
    userInput: PropTypes.shape({
        reminderText: PropTypes.string.isRequired,
        dueDate: PropTypes.string.isRequired,
    }),
    setUserInput: PropTypes.func
}