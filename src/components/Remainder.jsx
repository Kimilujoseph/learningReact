export default function Remainder(props) {
    return (
        <div>item:{props.reminderText}:
            due date:{props.dueDate}:
            completed:{String(props.isComplete)}
        </div>
    )
}