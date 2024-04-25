// import "./style.css"
// const command = 'date +"%m" +"%I:%M%p"';
const command = 'date +"%m/%d %I:%M%p"'

const refreshFrequency = 60000; // ms

const render = ({ output }) => <div className='screen'><div className='pecanclock'>{`${output}`}</div></div>;

export { command, refreshFrequency, render };
