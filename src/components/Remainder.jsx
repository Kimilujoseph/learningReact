import ProtoTypes from "prop-types"
export default function Remainder(props) {
    return (
        <div>item:{props.reminderText}:
            due date:{props.dueDate}:
            completed:{String(props.isComplete)}
        </div>
    )
}


Remainder.prototype = {
    reminderText: ProtoTypes.string.isRequired,
    dueDate: ProtoTypes.string.isRequired,
    isComplete: ProtoTypes.bool.isRequired,
}