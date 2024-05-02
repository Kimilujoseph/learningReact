export default function FIlterSelect(props) {
    return (
        <label htmlFor="filterRemainders">show tasks due:
            <select name="filterRemainder" id="filterRemainder" value={props.selectedFilter}>
                <option value="2day">within 2 days</option>
                <option value="1week">within 1 week</option>
                <option value="30 days">within 30 days</option>
                <option value="all">any time</option>
            </select>
        </label>
    )
}